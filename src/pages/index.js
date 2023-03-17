// Next
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// Components
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { Oswald } from 'next/font/google';

const oswaldFont = Oswald({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Explore USA</title>
        <meta name="description" content="Welcome to Explore USA! Discover the best places to visit, the most delicious foods to try, and the unique specials of each state in the United States." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
        <Header />

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="flex mx-12 flex-col text-center items-center justify-center">
            <Image
              src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
              alt="United States of America"
              width={200}
              height={200}
              className="rounded-xl my-6"
            />
            <h1 className={`text-7xl font-bold text-gray-800 mb-6 ${oswaldFont.className}`}>Welcome to {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                Explore USA!
              </span> {" "}🇺🇸
            </h1>
            <p className="text-lg text-gray-600 mb-10">Discover the best places to visit, the most delicious foods to try, and the unique specials of each state in the United States.</p>
            <Link href="/states">
              <p className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Get Started</p>
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};
