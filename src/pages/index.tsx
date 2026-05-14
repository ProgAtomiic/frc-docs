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

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <Link
          to="/docs/Example/"
          style={{
            background: '#423f43',
            padding: '4rem',
            borderRadius: '20px',
            width: '400px',
            textDecoration: 'none',
            color: 'white',
            textAlign: 'center',
            transition: '0.3s',
          }}

        >
          <h1 style={{ fontSize: '3rem' }}>      📘</h1>

          <h2>Example</h2>

          <p>
            This is an example page.
          </p>
        </Link>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      </main>
    </Layout>
  );
}
