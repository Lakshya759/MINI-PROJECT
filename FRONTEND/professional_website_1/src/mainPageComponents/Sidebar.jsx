import { useState, useEffect } from "react";
import axios from "axios";
import "./Sidebar.css";
import QuestionCard from "./QuestionCard";
import Navbar from "./Navbar";

const tags =["c","cpp","java","python","javascript","typescript","html","css","react","nodejs","express","mongodb","mysql","android","flutter","dsa","dbms","os","computer-networks","machine-learning","ai","cybersecurity","cloud-computing","git","github","academics","exams","notes","projects","campus-life","hostel","mess","sports","library","events","clubs","announcements","lost-and-found","help","feedback","issues","placements","internships","opportunities"];


export default function QuestionPage() {
  const [activeTag, setActiveTag] = useState("");
  const [questions, setQuestions] = useState([]);

  // Fetch data whenever activeTag changes
  const fetchQuestions = async (tag) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/v1/posts/view${tag ? `?tag=${tag}` : ""}`,
        { withCredentials: true }
      );

      setQuestions(res.data.data);
    } catch (err) {
      console.log("Error fetching questions", err);
    }
  };

  useEffect(() => {
    fetchQuestions(activeTag);
  }, [activeTag]);

  // Click handler for tags
  const handleTagClick = (tag) => {
    setActiveTag((prev) => (prev === tag ? "" : tag));
  };

  const toCamelCase = (str) =>
  str
    ?.toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");


    function timeAgo(dateString) {
      const now = new Date();
      const past = new Date(dateString);

      const seconds = Math.floor((now - past) / 1000);

      const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1,
      };

      for (let unit in intervals) {
        const value = Math.floor(seconds / intervals[unit]);
        if (value >= 1) {
          return new Intl.RelativeTimeFormat("en", { numeric: "auto" })
            .format(-value, unit);
        }
      }
    }

  return (
    <>
    <Navbar />
    <div className="qp-container">

      {/* TAG BAR */}
      <div className="qp-tagbar">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`qp-tag ${activeTag === tag ? "qp-tag-active" : ""}`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* SEARCH BAR */}
      

      {/* COUNT */}
      <p className="qp-count">{questions.length} questions found</p>

      {/* QUESTION LIST */}
      <div className="qp-list">
        {questions.map((q) => (
          <QuestionCard
                key={q?._id}
                id={q?._id}
                title={q?.title}
                body={q?.body}
                author={toCamelCase(q?.author?.name) || "Anonymous"}
                tags={q?.tags}
                upvotes={q?.upvotes}
                time={timeAgo(q?.createdAt)}
            />
        ))}
      </div>

    </div>
    </>
  );
}
