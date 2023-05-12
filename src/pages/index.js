import { useState, useEffect } from 'react';
import Head from 'next/head';

import HeaderMobile from '@/components/layout/HeaderMobile';
import Header from '@/components/layout/Header';

function Home() {
  const mobileBreakPoint = 700;
  const [isMobile, setIsMobile] = useState(undefined);

  useEffect(() => {
    function resize() {
      setIsMobile(window.innerWidth < mobileBreakPoint ? true : false);
    }
    resize();
    window.addEventListener('resize', resize);
    return (() => window.removeEventListener('resize', resize));
  }, []);

  return (
    <>
      <Head>
        <title>Kanban Task Management</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {isMobile ? <HeaderMobile /> : <Header />}
      <main>
        <h1>Kanban Task Management</h1>
      </main>
    </>
  );
}

export default Home;
