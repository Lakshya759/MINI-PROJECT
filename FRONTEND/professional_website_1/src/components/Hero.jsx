import "./Hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <nav>
        <div className="logos">CampusQuery</div>
        <div className="sections">
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="login">
          <button><Link to="/login">LOGIN</Link></button>
          <button><Link to="/signup">SIGNUP</Link></button>
        </div>
      </nav>
      <div className="containers">
        <div className="text">
          <div className="text1">Your Academic Q&A Community</div>
          <h1>Ask Questions, Share Knowledge, Excel Together</h1>
          <p>
            Campus Connect is your go-to platform for academic collaboration.
            Post questions, get expert answers from fellow students, share your
            knowledge, and build a thriving learning community within your
            college.
          </p>
          <div className="buttons">
            <button className="button1">Get Started</button>
            <button className="button2">Learn More</button>
          </div>
        </div>
        <div className="image">
          <img
            src="https://i.pinimg.com/736x/c7/bb/68/c7bb6896dcbe5cf7ea9584c0e231d8ec.jpg"
            alt=""
          />
        </div>
      </div>
      <section class="features-section">
        <div class="features-header">
          <h2>Everything You Need for Academic Success</h2>
          <p>
            Our platform provides all the tools you need to ask questions, share
            knowledge, and collaborate with your college community in a seamless
            Q&A environment.
          </p>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="icon blue">
              <i class="fas fa-comment-alt"></i>
            </div>
            <h3>Ask Questions Freely</h3>
            <p>
              Post your academic doubts, assignment queries, or concept
              clarifications and get answers from knowledgeable peers.
            </p>
          </div>

          <div class="feature-card">
            <div class="icon purple">
              <i class="fas fa-search"></i>
            </div>
            <h3>Smart Search</h3>
            <p>
              Find answers quickly with our intelligent search system. Browse
              through existing questions before posting new ones.
            </p>
          </div>

          <div class="feature-card">
            <div class="icon orange">
              <i class="fas fa-thumbs-up"></i>
            </div>
            <h3>Upvote Best Answers</h3>
            <p>
              Help the community by upvoting helpful answers. The most accurate
              responses rise to the top.
            </p>
          </div>

          <div class="feature-card">
            <div class="icon green">
              <i class="fas fa-bookmark"></i>
            </div>
            <h3>Save & Organize</h3>
            <p>
              Bookmark important questions and answers for future reference.
              Build your personal knowledge library.
            </p>
          </div>

          <div class="feature-card">
            <div class="icon yellow">
              <i class="fas fa-award"></i>
            </div>
            <h3>Earn Reputation</h3>
            <p>
              Get recognized for helping others. Build your reputation score by
              providing quality answers.
            </p>
          </div>

          <div class="feature-card">
            <div class="icon violet">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3>Trending Topics</h3>
            <p>
              Stay updated with the most discussed topics and popular questions
              in your college community.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
