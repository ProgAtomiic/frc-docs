import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '4rem',
        padding: '4rem',
        flexWrap: 'wrap',
        backgroundColor: '#111827',
        minHeight: '50vh'
      }}
      >
        <Link
          to="/docs/Subtopics/Introduction"
          style={{
            background: '#423f43',
            padding: '2rem',
            borderRadius: '20px',
            width: '400px',
            textDecoration: 'none',
            color: 'white',
            textAlign: 'center',
            transition: '0.3s',
          }}

        >
          <h1 style={{ fontSize: '3rem' }}>📘</h1>

          <h2>Introduction</h2>

          <p>
            Understanding the basics of FRC java project development.
          </p>
        </Link>

        <Link
          to="/docs/Subtopics/CodeStandarts"
          style={{
            background: '#423f43',
            padding: '2rem',
            borderRadius: '20px',
            width: '400px',
            textDecoration: 'none',
            color: 'white',
            textAlign: 'center',
            transition: '0.3s',
          }}

        >
          <h1 style={{ fontSize: '3rem' }}>📏</h1>

          <h2>Code standards</h2>

          <p>
            Following best practices for writing maintainable and efficient code.
          </p>
        </Link>

        <Link
          to="/docs/Subtopics/CodeStructure"
          style={{
            background: '#423f43',
            padding: '2rem',
            borderRadius: '20px',
            width: '400px',
            textDecoration: 'none',
            color: 'white',
            textAlign: 'center',
            transition: '0.3s',
          }}

        >
          <h1 style={{ fontSize: '3rem' }}>🏗️</h1>

          <h2>Code structure</h2>

          <p>
            Looking for how we structure our code and how to master it.
          </p>
        </Link>

        <Link
          to="/docs/Subtopics/ControlTechniques"
          style={{
            background: '#423f43',
            padding: '2rem',
            borderRadius: '20px',
            width: '400px',
            textDecoration: 'none',
            color: 'white',
            textAlign: 'center',
            transition: '0.3s',
          }}

        >
          <h1 style={{ fontSize: '3rem' }}>🎮</h1>

          <h2>Control techniques</h2>

          <p>
            Making your robot interacts as it should with the real world.
          </p>
        </Link>

        <Link
          to="/docs/Subtopics/CodeDeveloping"
          style={{
            background: '#423f43',
            padding: '2rem',
            borderRadius: '20px',
            width: '400px',
            textDecoration: 'none',
            color: 'white',
            textAlign: 'center',
            transition: '0.3s',
          }}

        >
          <h1 style={{ fontSize: '3rem' }}>💻</h1>

          <h2>Code developing</h2>

          <p>
            Creating and implementing new code concepts.
          </p>
        </Link>

        <Link
          to="/docs/Subtopics/TestingANDImproving"
          style={{
            background: '#423f43',
            padding: '2rem',
            borderRadius: '20px',
            width: '400px',
            textDecoration: 'none',
            color: 'white',
            textAlign: 'center',
            transition: '0.3s',
          }}

        >
          <h1 style={{ fontSize: '3rem' }}>🧪</h1>

          <h2>Testing and improving</h2>

          <p>
            Performing good tests and interpreting the results to get better.
          </p>
        </Link>

      </main>
    </Layout>
  );
}
