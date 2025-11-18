import "./QuestionCard.css";

const QuestionCard = ({ title, body, tags, author, time}) => {
  return (
    <div className="question-card">
      <h3>{title}</h3>
      <p className="desc">{body}</p>

      <div className="tags">
        {tags.map((tag, i) => (
          <span key={i} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="footer">
        <div className="user-info">
          <div className="avatar">{author[0]}</div>
          <span className="name">{author}</span>
          <span className="dot">•</span>
          <span className="time">{time}</span>
        </div>

        
      </div>
    </div>
  );
};

export default QuestionCard;
