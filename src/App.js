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
      "AI-powered chatbot automating customer service workflows. Cross-platform Web 💻 & Mobile 📱 app with analytics dashboard.",
    tech: "React, Node.js, OpenAI API, Firebase",
    image:
      "https://via.placeholder.com/400x250/4A90E2/FFFFFF?text=AI+Chatbot",
  },
  {
    title: "Document Summarization Tool",
    description:
      "Generative AI automation that summarizes large PDFs and web pages quickly. Web 💻 & Mobile 📱 ready.",
    tech: "React, Python (FastAPI), LangChain",
    image:
      "https://via.placeholder.com/400x250/50E3C2/000000?text=Doc+Summarizer",
  },
  {
    title: "Task Automation Workflow",
    description:
      "Automates business workflows using AI and API integrations. Runs on Web 💻 & Mobile 📱 for flexible use.",
    tech: "n8n, Zapier, Webhooks, REST APIs",
    image:
      "https://via.placeholder.com/400x250/F5A623/000000?text=Workflow+Automation",
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
                {title}{" "}
                <span role="img" aria-label="web" style={styles.icon}>
                  💻
                </span>
                <span role="img" aria-label="mobile" style={styles.icon}>
                  📱
                </span>
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
          Email:{" "}
          <a href="mailto:your.email@example.com">your.email@example.com</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/your-profile
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/yourusername
          </a>
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
    color: "#667",
  },
};

export default App;
