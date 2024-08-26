import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

const features = [
  {
    title: "Scalable Architecture",
    description:
      "Built with modular and maintainable design patterns to support various types of mobile applications.",
    icon: "🏗️",
  },
  {
    title: "Ready-to-Use Components",
    description:
      "Includes pre-built UI components and screens to accelerate your development process.",
    icon: "🧩",
  },
  {
    title: "Comprehensive Documentation",
    description:
      "Detailed guides and best practices to help you make the most of the boilerplate.",
    icon: "📚",
  },
  {
    title: "State Management",
    description:
      "Integrated Redux Toolkit for efficient and predictable state management.",
    icon: "🔄",
  },
  {
    title: "API Integration",
    description: "Built-in support for RESTful and GraphQL API integrations.",
    icon: "🌐",
  },
  {
    title: "Testing Framework",
    description:
      "Preconfigured testing setup with Jest and React Testing Library.",
    icon: "🧪",
  },
];

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className={styles.title}>MVP Studio Boilerplate</h1>
        <p className={styles.subtitle}>
          A scalable and efficient mobile app development boilerplate
        </p>
        <div className={styles.buttons}>
          <Link className={styles.button} to="/docs/intro">
            Get Started
          </Link>
          <Link
            className={`${styles.button} ${styles.buttonOutline}`}
            to="https://github.com/your-org/mvp-studio-architecture"
          >
            View on GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({ title, description, icon }) {
  return (
    <div className={styles.feature}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main className={styles.main}>
        <section className={styles.features}>
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </section>
      </main>
    </Layout>
  );
}
