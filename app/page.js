"use client"
import { useState, useEffect } from 'react';
import Timeline from "@/components/timeline/Timeline"; 
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import LoadingScreen from "@/components/LoadingScreen"; // Import loading screen component

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set the loading screen to disappear after 2 seconds (or adjust as needed)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      {loading && <LoadingScreen />} {/* Show loading screen if still loading */}
      <Navbar />
      <main className="banner">
        {/* Gradient Circles */}
        <div className="gradient-circle top-left"></div>
        <div className="gradient-circle bottom-right"></div>

        <div className="bn-bg">
          <Image 
            src="/logo-mid.png"
            alt="recode logo"
            width={400}
            height={300}
          />
        </div>
        <h1 id="home" className="bn-h1">
          Unleash Your Digital Creativity<br /> – No Code Required!
        </h1>
        <div className="image-container">
          <Image
            className="bn-logo"
            src="/1.png"
            alt="robot lady"
            width={400}
            height={300}
          />
        </div>
        <button className="glassmorphism-button"><Link href='https://app.recodeai.build/'>Launch App</Link></button>
      </main>

      <div id="about" className="about">
        <h1>About Recode AI</h1>
        <p>Recode AI is a no-code platform that empowers 
          anyone to build websites, apps, and stores 
          with ease. With drag-and-drop tools, one-click 
          deployment, AI analytics, and automated 
          content, Recode AI simplifies digital 
          creation from start to finish.
        </p>

        {/* Video Section */}
        <div className="video-container">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
          >
            <source src="/vid-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <Timeline />

      <footer id="links" className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Recode AI. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
            <a href="/terms-of-service" className="footer-link">Terms of Service</a>
            <a href="/" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
            <a href="https://recodeai.gitbook.io/recodeai-docs" target="_blank" rel="noopener noreferrer" className="footer-link">Docs</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
