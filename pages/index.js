import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from './components/Navbar.js';
import HOME from './components/HOME.js';
import About from './components/About';
import Contact from './components/Contact';
import FaQs from './components/FaQs';
import Features from './components/Features';
import Pricing from './components/Pricing';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Navbar />
      <HOME />
      <Features />
      <About />
      <FaQs />
      <Pricing />
      <Contact />
    </div>
  );
}
