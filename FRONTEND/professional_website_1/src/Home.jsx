import axios from "axios"
import Navbar from "./mainPageComponents/Navbar"
import QuestionCard from "./mainPageComponents/QuestionCard"
import Tabs from "./mainPageComponents/Tabs"
import "./Home.css"
import { useState,useEffect } from "react"

const Home = () => {
    const [message,setMessage]=useState("")
    const [posts,setPosts]=useState([])
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

    
    useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/posts/view", {
          withCredentials: true // if your backend uses cookies
        });
        console.log("lakshya")

        if (!res.data) {
          setMessage("No posts found");
        } else {
          setPosts(res.data.data);
        }

      } catch (error) {
        console.log(error);
        setMessage("Can't fetch the posts");
      }
    };

    fetchPosts();
  }, []);

  const toCamelCase = (str) =>
  str
    ?.toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  

  return (
    <div className="home-container">
      
      <Navbar />


      <div className="content">
        <h2 className="section-title">Recent Questions</h2>
        

        {posts.map((post)=>
            <QuestionCard
                key={post?._id}
                id={post?._id}
                title={post?.title}
                body={post?.body}
                author={toCamelCase(post?.author?.name) || "Anonymous"}
                tags={post?.tags}
                upvotes={post?.upvotes}
                time={timeAgo(post?.createdAt)}
            />
        )}


        {/* <QuestionCard
          title="How do I solve this calculus problem involving limits?"
          desc="I'm stuck on finding the limit as x approaches 0 of (sin(x)/x). Can someone explain the steps?"
          tags={["Mathematics", "Calculus"]}
          author="Sarah Chen"
          time="almost 2 years ago"
          comments={1}
          views={45}
        />

        <QuestionCard
          title="Best resources for learning React hooks?"
          desc="I'm new to React and finding hooks confusing. What are the best tutorials or documentation to understand useState and useEffect?"
          tags={["Computer Science", "React", "Web Development"]}
          author="Alex Kumar"
          time="almost 2 years ago"
          comments={2}
          views={78}
        />

        <QuestionCard
          title="Organic Chemistry: Understanding SN1 vs SN2 reactions"
          desc="Can someone explain the key differences between SN1 and SN2 reactions? I keep mixing them up."
          tags={["Chemistry", "Organic Chemistry"]}
          author="Jordan Smith"
          time="almost 2 years ago"
          comments={0}
          views={23}
        /> */}

      </div>
    </div>
  )
}

export default Home