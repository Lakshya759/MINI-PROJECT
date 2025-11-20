import "./Hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <nav>
        <div className="logos">CampusQuery</div>
        <div className="sections">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#feature">Features</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>
        <div className="login">
          <button><Link to="/login">LOGIN</Link></button>
          <button><Link to="/signup">SIGNUP</Link></button>
        </div>
      </nav>
      <div className="containerss" id="home">
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
            <button className="button2"><a href="#about">Learn More</a></button>
          </div>
        </div>
        <div className="image">
          <img
            src="https://i.pinimg.com/736x/c7/bb/68/c7bb6896dcbe5cf7ea9584c0e231d8ec.jpg"
            alt=""
          />
        </div>
      </div>
      <section class="features-section" id="feature">
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
               <img src="/message.png" alt="" />
            </div>
            <h3>Ask Questions Freely</h3>
            <p>
              Post your academic doubts, assignment queries, or concept
              clarifications and get answers from knowledgeable peers.
            </p>
          </div>

          <div class="feature-card">
            <div class="icon purple">
               <img src="/search.png" alt="" />
            </div>
            <h3>Smart Search</h3>
            <p>
              Find answers quickly with our intelligent search system. Browse
              through existing questions before posting new ones.
            </p>
          </div>

          <div class="feature-card">
            <div class="icon orange">
              <img src="/thumb up.png" alt="" />
            </div>
            <h3>Upvote Best Answers</h3>
            <p>
              Help the community by upvoting helpful answers. The most accurate
              responses rise to the top.
            </p>
          </div>

          <div class="feature-card">
            <div class="icon green">
              <img src="/book.png" alt="" />
            </div>
            <h3>Save & Organize</h3>
            <p>
              Bookmark important questions and answers for future reference.
              Build your personal knowledge library.
            </p>
          </div>

          <div class="feature-card">
            <div class="icon yellow">
              <img src="/medal.png" alt="" />
            </div>
            <h3>Earn Reputation</h3>
            <p>
              Get recognized for helping others. Build your reputation score by
              providing quality answers.
            </p>
          </div>

          <div class="feature-card">
            <div class="icon violet">
               <img src="/growth.png" alt="" />
            </div>
            <h3>Trending Topics</h3>
            <p>
              Stay updated with the most discussed topics and popular questions
              in your college community.
            </p>
          </div>
        </div>
      </section>
      <section class="about-section" id="about">
    <h2 class="section-title">About Us</h2>
    <p class="section-subtitle">
        CampusQuery is built to bring your entire campus community together — 
        ask questions, share knowledge, stay updated, and collaborate with ease.
    </p>

    
    <div class="about-cards">
        <div class="about-card">
            <h3>Our Vision</h3>
            <p>
                To create a smart digital ecosystem where students help each other,
                clubs reach the right audience, and important information is never missed.
            </p>
        </div>

        <div class="about-card">
            <h3>Our Mission</h3>
            <p>
                To empower students to connect, learn, collaborate, and grow —
                all through a single community-driven platform.
            </p>
        </div>
    </div>

    
    <h2 class="team-title">Meet the Developers</h2>

    <div class="team-grid">

        <div class="team-card">
            <div class="team-icon">👨‍💻</div>
            <h3>Lakshya Srivastava</h3>
            <p><strong>Email:</strong> 2400520100047@ietlucknow.ac.in</p>
            <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
        </div>

        <div class="team-card">
            <div class="team-icon">👨‍💻</div>
            <h3>Ayush Sharma</h3>
            <p><strong>Email:</strong> 2400520100026@ietlucknow.ac.in</p>
            <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
        </div>

        <div class="team-card">
            <div class="team-icon">👨‍💻</div>
            <h3>Himanshu</h3>
            <p><strong>Email:</strong> 2400520100040@ietlucknow.ac.in</p>
            <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
        </div>

        <div class="team-card">
            <div class="team-icon">👨‍💻</div>
            <h3>Ishant Kumar</h3>
            <p><strong>Email:</strong>2400520100041@ietlucknow.ac.in</p>
            <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
        </div>

    </div>

    
    <div class="repo-card">
        <h3>Project Repository</h3>
        <p>Explore the complete source code of CampusQuery on GitHub.</p>
        <a href="https://github.com/Lakshya759/MINI-PROJECT" class="repo-btn">View GitHub Repo →</a>
    </div>
</section>

    </>
  );
};

export default Hero;
