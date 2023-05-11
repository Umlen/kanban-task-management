import { Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${plusJakartaSans.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

export default App;
