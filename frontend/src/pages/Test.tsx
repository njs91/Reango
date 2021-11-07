import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface Page {
  id: number;
  notes: string;
}

const Test: React.VFC = () => {
  const [pages, setPages] = useState<null | Array<Page>>(null);

  const getPages = async (): Promise<void> => {
    // add try/catch for using errors
    // const response = await fetch('http://127.0.0.1:8000/api/pages'); // not needed due to proxy in package.json
    const response = await fetch('/api/pages');
    const data = await response.json();
    setPages(data);
  };

  useEffect(() => {
    getPages();
  }, []);

  if (!pages) {
    return <p>Loading...</p>;
  }

  if (!pages?.length) {
    return <p>No data could be fetched</p>;
  }

  return (
    <div>
      <Header />
      <h1>Test Page</h1>
      <Footer />
    </div>
  );
};

export default Test;
