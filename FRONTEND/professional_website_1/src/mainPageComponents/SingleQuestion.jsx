import React from 'react'
import "./SingleQuestion.css"
const SingleQuestion = () => {
  return (
    <div className="page">
  <a href="#" className="back-btn">← Back to questions</a>

  <div className="question-card">
    <div className="question-header">
      <h2>How do I solve this calculus problem involving limits?</h2>

      <div className="user-info">
        <div className="avatar">SC</div>
        <div>
          <p className="username">Sarah Chen • almost 2 years ago</p>
        </div>
      </div>

      <p className="question-text">
        I'm stuck on finding the limit as x approaches 0 of (sin(x)/x).
        Can someone explain the steps?
      </p>

      <div className="tags">
        <span className="tag">Mathematics</span>
        <span className="tag">Calculus</span>
      </div>
    </div>
  </div>

  <h3 className="answers-title">1 Answer</h3>

  <div className="answer-card">
    <div className="vote-section">↑</div>

    <div className="answer-body">
      <div className="answer-user">
        <div className="avatar green">MJ</div>
        <p className="username">Mike Johnson • almost 2 years ago</p>
      </div>

      <p className="answer-text">
        This is a classic limit! The limit of sin(x)/x as x approaches 0 is 1.
        You can prove this using L'Hôpital's rule or by using the squeeze theorem.
      </p>
    </div>
  </div>

  <div className="your-answer">
    <h3>Your Answer</h3>
    <textarea placeholder="Write your answer here..."></textarea>
    <button className="post-btn">Post Answer</button>
  </div>
</div>
  )
}

export default SingleQuestion