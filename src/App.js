import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const skills = [
  "AI Automation",
  "Generative AI",
  "Cross-Platform Development",
  "API & Webhook Integration",
  "Product Management",
];

const projects = [
  {
    title: "Customer Support AI Chatbot",
    description:
      "AI-powered chatbot automating customer service workflows. Cross-platform Web & Mobile app with analytics dashboard.",
    tech: "React, Node.js, OpenAI API, Firebase",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Document Summarization Tool",
    description:
      "Generative AI automation that summarizes large PDFs and web pages quickly. Web & Mobile ready.",
    tech: "React, Python (FastAPI), LangChain",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Task Automation Workflow",
    description:
      "Automates business workflows using AI and API integrations. Runs on Web & Mobile for flexible use.",
    tech: "n8n, Zapier, Webhooks, REST APIs",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
];

function App() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.name}>Anne G.</h1>
        <p style={styles.title}>
          Developer & Product Manager
          <br />
          AI Automation & Generative AI
          <br />
          Web 💻 & Mobile 📱 Apps
        </p>
        <p style={styles.githubLink}>
          Portfolio:{" "}
          <a
            href="https://anne29223.github.io/anneg-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://anne29223.github.io/anneg-portfolio
          </a>
        </p>
      </header>

      <section style={styles.about}>
        <h2>About Me</h2>
        <p>
          I specialize in designing and delivering AI-powered products that
          automate workflows and generate content using the latest generative
          AI technologies. Experienced in both development and product
          management across web and mobile platforms.
        </p>
      </section>

      <section style={styles.skillsSection}>
        <h2>Skills</h2>
        <ul style={styles.skillsList}>
          {skills.map((skill) => (
            <li key={skill} style={styles.skillItem}>
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section style={styles.projectsSection}>
        <h2>Projects</h2>
        <div style={styles.grid}>
          {projects.map(({ title, description, tech, image }) => (
            <div key={title} style={styles.card}>
              <img src={image} alt={title} style={styles.image} />
              <h3 style={styles.projectTitle}>
                <img src={require('./logo.svg')} alt="logo" style={{height: '1.2em', verticalAlign: 'middle', marginRight: 8}} />
                {title}
                <FontAwesomeIcon icon={faLaptop} style={{marginLeft: 8, fontSize: "1.1em"}} title="Web App" />
                <FontAwesomeIcon icon={faMobileAlt} style={{marginLeft: 8, fontSize: "1.1em"}} title="Mobile App" />
              </h3>
              <p style={styles.description}>{description}</p>
              <p style={styles.tech}>
                <strong>Tech:</strong> {tech}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.contact}>
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:anneg.dev99@gmail.com">anneg.dev99@gmail.com</a>
        </p>
        <p>
            LinkedIn: <a href="https://www.linkedin.com/in/anne-g-388aa5379/" target="_blank" rel="noopener noreferrer">linkedin.com/in/anne-g-388aa5379</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/anne29223" target="_blank" rel="noopener noreferrer">github.com/anne29223</a>
        </p>
      </section>

      <footer style={styles.footer}>
        &copy; {new Date().getFullYear()} Anne G.
      </footer>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
    background: "#f9f9f9",
    color: "#222",
  },
  header: {
    textAlign: "center",
    padding: "3rem 1rem 2rem",
    background: "#222",
    color: "#fff",
  },
  name: {
    margin: 0,
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  title: {
    fontSize: "1.1rem",
    lineHeight: 1.5,
    marginTop: "0.5rem",
    whiteSpace: "pre-line",
  },
  githubLink: {
    marginTop: "1rem",
    fontSize: "0.9rem",
  },
  about: {
    maxWidth: 700,
    margin: "2rem auto",
    padding: "0 1rem",
    fontSize: "1rem",
    lineHeight: 1.6,
  },
  skillsSection: {
    maxWidth: 700,
    margin: "2rem auto",
    padding: "0 1rem",
  },
  skillsList: {
    listStyleType: "disc",
    paddingLeft: "1.5rem",
  },
  skillItem: {
    marginBottom: "0.5rem",
  },
  projectsSection: {
    maxWidth: 1000,
    margin: "2rem auto",
    padding: "0 1rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    background: "#fff",
    borderRadius: "10px",
    padding: "1.25rem",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "1rem",
  },
  projectTitle: {
    fontSize: "1.3rem",
    marginBottom: "0.5rem",
  },
  icon: {
    marginLeft: 6,
  },
  description: {
    fontSize: "0.95rem",
    color: "#444",
  },
  tech: {
    fontSize: "0.9rem",
    color: "#333",
    marginTop: "0.75rem",
  },
  contact: {
    maxWidth: 700,
    margin: "3rem auto 2rem",
    padding: "0 1rem",
    textAlign: "center",
    fontSize: "1rem",
  },
  footer: {
    textAlign: "center",
    padding: "1rem",
    background: "#eee",
    fontSize: "0.85rem",
    color: "#666",
  },
};

export default App;
