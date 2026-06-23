import profilePhoto from "./assets/profile.jpg.jpeg";
import './App.css'
import { motion } from "framer-motion";

function App() {


  return (
    <div className="App">
      <nav className="navbar">
        <h2>NIKSHIT N</h2>
        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >
          <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          > Software Engineer | Backend & Full Stack Developer </ motion.p>
          
          <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          >Hi, I'm Nikshit Suresh Nallapagari</motion.h1>
          
          <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.6 }}
          >I build backend systems, REST APIs, and AI-assisted software tools.</motion.h3>
          
          <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          >
            Software Engineer with experience in Java, Spring Boot, SQL, AWS,
            enterprise banking applications, and LLM-based code generation research.
        </motion.p>

        <p className="location"> Mumbai, India • Open to Relocation </p>
          <div className="buttons">
            <a href="/resume/NIKSHIT SURESH - Resume.pdf"
              target="_blank"
               rel="noopener noreferrer"
               className="resume-btn"
            >
               Resume
            </a>
            <a
             href="https://www.linkedin.com/in/nikshit-suresh-nallapagari-b661b5181"
            target="_blank"
            rel="noopener noreferrer"
            >
            LinkedIn
            </a>

            <a
             href="https://github.com/Nikshit-Suresh"
            target="_blank"
            rel="noopener noreferrer"
            >
            GitHub
            </a>
            <a href="#contact" className="secondary">
              Contact Me
            </a>
          </div>
        </motion.div>

        
        <div className="hero-photo">
          <motion.img
          src={profilePhoto}
          alt="Nikshit"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
               duration: 1,
              delay: 0.5
            }}
          />
        </div>
      </section>

      <motion.section
      id="about"
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.5 }}
      >
        <h2>About Me</h2>
        <p>
          Software Engineer with 2+ years of experience building Java and Spring Boot applications, REST APIs, microservices, and distributed systems.
          Experienced in delivering scalable software solutions throughout the SDLC, with a strong focus on performance, reliability, testing, and software quality.
        </p>
      </motion.section>

      <motion.section
       id="experience"
      className="section"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.5 }}
      >
        <h2>Experience</h2>

        <div className="card">
          <h3>Senior System Engineer — Infosys</h3>
          <p>Jul 2021 – Aug 2023</p>
          <p>
            Built Java Spring Boot microservices and REST APIs for enterprise banking applications at Citibank through Infosys.
            Improved backend performance by 30–40%, reduced security vulnerabilities by 90%, and supported end-to-end service delivery including CI/CD, monitoring, and production support.
          </p>
        </div>

        <div className="card">
          <h3>Software Engineering Research Intern — Syracuse University</h3>
          <p>Jun 2025 – Jun 2026</p>
          <p>
            Conducted research on code generation using Large Language Models (LLMs), developing automated benchmarking and evaluation pipelines to assess correctness, reliability, and security of AI-generated code.
            Built testing and analysis workflows using HumanEval and MBPP datasets to identify functional defects, logical errors, and software vulnerabilities in generated software.
          </p>
        </div>
      </motion.section>


      <motion.section
      id="skills"
      className="section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.5 }}
      >
        <h2>Skills</h2>
        
        <div className="grid">
          <div className="card">
            <h3>Programming Languages</h3>
            <div className="skill-tags">
            <span>Java</span>
            <span>Python</span>
            <span>SQL</span>
            <span>JavaScript</span>
            <span>C++</span>
            </div> 
          </div>

          <div className="skill-card">
            <h3>Technologies </h3>
            <div className="skill-tags">
              <span>Spring Boot</span>
              <span>REST APIs</span>
              <span>Microservices</span>
              <span>Hibernate</span>
              <span>Redis</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Databases</h3>
            <div className="skill-tags">
              <span>MySQL</span>
              <span>PostgreSQL</span>
              <span>MongoDB</span>
              <span>Oracle</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Frontend Technologies</h3>
            <div className="skill-tags">
              <span>React</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Cloud & Tools</h3>
            <div className="skill-tags">
              <span>AWS</span>
              <span>Git</span>
              <span>Docker</span>
              <span>Kubernetes</span>
              <span>CI/CD</span>
              <span>Jira</span>
              <span>Bitbucket</span>
              <span>Postman</span>
              <span>Maven</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>AI & Machine Learning</h3>
            <div className="skill-tags">
              <span>Python ML Libraries</span>
              <span>LLM-based Code Generation</span>
              <span>Data Analysis</span>
            </div>
          </div>
        </div>
      </motion.section>

       <motion.section
       id="projects"
       className="section"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.5 }}
      >
        <h2>Projects</h2>

        <div className="grid">
          <div className="card">
            <h3>Code Generation with LLMs</h3>
            <h2 className="tech">Python • GPT-4 • CodeT5 • HumanEval • MBPP</h2>
              <ul>
                <li>Developed automated benchmarking pipelines to evaluate LLM-generated code using HumanEval and MBPP datasets.</li>
                <li>Implemented static analysis and testing workflows to identify functional defects, logical errors, and security vulnerabilities in generated code.</li>
                <li>Analyzed reliability and correctness of LLM-generated software, providing insights into strengths and limitations of current code generation models.</li>
              </ul>
          </div>

          <div className="card">
            <h3>Employee Promotion Prediction</h3>
            <h2 className="tech">Python • Machine Learning • Data Analysis </h2>
              <ul>
                <li>Built machine learning models (SVM, Random Forest, XGBoost) achieving 88% accuracy on 50,000+ records.</li>
                <li>Designed scalable data processing pipeline for large datasets and feature engineering.</li>
                <li>Developed data-driven backend logic to support prediction workflows and decision-making systems.</li>
                <li>Explored integration of machine learning models into application workflows.</li>
              </ul>
          </div>
        </div>
      </motion.section>

      <motion.section
      id="education"
      className="section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.5 }}
      >
       <h2>Education</h2>

        <div className="card">
        <h3>Master of Science in Computer Science</h3>
        <p>Syracuse University, New York, USA | 2023 – 2025</p>
        <p>GPA: 3.70 / 4.0</p>
        </div>

        <div className="card">
        <h3>Bachelor of Technology in Computer Science</h3>
        <p>SRM Institute of Science and Technology, Chennai, India | 2017 – 2021</p>
        <p>GPA: 8.12 / 10</p>
       </div>
      </motion.section>

      <section id="contact" className="section contact">
  <h2>Let's Connect</h2>

  <p className="contact-text">
    I'm currently open to Software Engineer/Full Stack Engineer roles, Backend Engineer,
    and Java Developer opportunities.
  </p>

  <div className="contact-links">

    <a
      href="mailto:nikshit14@gmail.com"
      className="contact-card"
    >
       Email
    </a>

    <a
      href="https://www.linkedin.com/in/nikshit-suresh-nallapagari-b661b5181"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
       LinkedIn
    </a>

    <a
      href="https://github.com/Nikshit-Suresh"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
       GitHub
    </a>

    <a
      href="/resume/Nikshit_Suresh_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
       Resume
    </a>

  </div>

  <p className="location">
     Mumbai, India • Open to Relocation
  </p>
</section>
    </div>
  );
}

export default App
