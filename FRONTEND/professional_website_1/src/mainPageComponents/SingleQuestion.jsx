import React from "react";
import "./SingleQuestion.css";
import { useParams ,Link} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SingleQuestion = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState({});
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  console.log(id);

  const fetchAns = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/v1/answer/${id}`, {
        withCredentials: true,
      });
      console.log("lakshya");

      if (!res.data) {
        console.log("Answers Not Found");
      } else {
        if (res.data?.data?.answers) {
          const sorted = res.data.data.answers.sort(
            (a, b) => b.upvotes.length - a.upvotes.length
          );
          setComments(sorted); 
      }}
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setComment(e.target.value);
    console.log(comment);
  };
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/v1/posts/view/${id}`,
          {
            withCredentials: true, // if your backend uses cookies
          }
        );
        console.log("lakshya");

        if (!res.data) {
          console.log("Post Not Found");
        } else {
          setQuestion(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    fetchAns();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/answer/create/${id}`,
        {
          body: comment,
        },
        { withCredentials: true }
      );
      if (res.data.success) {
        console.log("login successful");
        setComment("");
        fetchAns();
        // window.location.href(/main)
      }
    } catch (err) {
      if (err.response) {
        console.log(err.response);
      } else {
        console.log("something went wrong");
      }
    }
  };


  const updateUpvoteLocally = (answerId, newCount) => {
  setComments(prev =>
    prev.map(ans =>
      ans._id === answerId
        ? { ...ans, upvotes: Array(newCount).fill(1) } // convert number → array
        : ans
    )
  );
};

  const upvote=async (answerId)=>{
    try {
      const res = await axios.patch(
        `http://localhost:8000/api/v1/answer/upvote/${answerId}`,{},{ withCredentials: true }
      );
      if (res.data.success) {
        console.log("upvote successful");
        updateUpvoteLocally(answerId, res.data.data.upvotes);
        // window.location.href(/main)
      }
    } catch (err) {
      if (err.response) {
        console.log(err.response);
      } else {
        console.log("something went wrong");
      }
    }
  }
  

  return (
    <div className="page">
      
      <Link to="/home" className="back-btn">← Back to questions</Link>

      <div className="question-card">
        <div className="question-header">
          <h2>{question?.title}</h2>

          <div className="user-info">
            <div className="avatar">{question?.author?.name?.[0] || "U"}</div>
            <div>
              <p className="username">{question?.author?.name || "Anonymous"}</p>
            </div>
          </div>

          <p className="question-text">{question.body}</p>

          <div className="tags">
            {question.tags?.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <h3 className="answers-title">{comments?.length} Answers</h3>
      {comments?.map((ans) => (
        <div className="answer" key={ans?._id}>
          <div className="answer-card">
            <div className="vote-section" onClick={() => upvote(ans?._id)}>↑ {ans.upvotes.length || 0}</div>

            <div className="answer-body">
              <div className="answer-user">
                <div className="avatar green">{ans?.author?.name[0] || "U"}</div>
                <p className="username">{ans?.author?.name || "Anonymous"}</p>
              </div>

              <p className="answer-text">{ans.body}</p>
            </div>
          </div>
        </div>
      ))}
      {/* <div className="answer">
        <h3 className="answers-title">1 Answer</h3>

        <div className="answer-card">
          <div className="vote-section">↑</div>

          <div className="answer-body">
            <div className="answer-user">
              <div className="avatar green">MJ</div>
              <p className="username">Mike Johnson • almost 2 years ago</p>
            </div>

            <p className="answer-text">
              This is a classic limit! The limit of sin(x)/x as x approaches 0
              is 1. You can prove this using L'Hôpital's rule or by using the
              squeeze theorem.
            </p>
          </div>
        </div>
      </div> */}

      <div className="your-answer">
        <h3>Your Answer</h3>
        <textarea
          placeholder="Write your answer here..."
          value={comment}
          onChange={handleChange}
        ></textarea>
        <button className="post-btn" onClick={handleSubmit}>
          Post Answer
        </button>
      </div>
    </div>
  );
};

export default SingleQuestion;
