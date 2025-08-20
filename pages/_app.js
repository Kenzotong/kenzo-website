
import '../styles/globals.css';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [category, setCategory] = useState('Exposition'); // Default category for work pages

  // Determine currentPage for Navbar highlighting based on router.pathname
  const [currentPage, setCurrentPage] = useState('Home');
  useEffect(() => {
    switch (router.pathname) {
      case '/':
        setCurrentPage('Home');
        break;
      case '/about':
        setCurrentPage('About');
        break;
      case '/contact':
        setCurrentPage('Contact');
        break;
      case '/exposition':
      case '/athletics':
        setCurrentPage('Work'); // Set 'Work' as current for any work-related page
        // The specific category is implicitly handled by the page being rendered
        break;
      default:
        setCurrentPage('Home'); // Fallback for unmatched routes
        break;
    }
  }, [router.pathname]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans transition-colors flex flex-col">
      <Navbar 
        currentPage={currentPage} 
        setCategory={setCategory} 
      />
      <main className="flex-grow">
        <Component 
          {...pageProps} 
          category={category} 
          setCategory={setCategory} // Pass setCategory to allow Navbar to update it
        />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;

