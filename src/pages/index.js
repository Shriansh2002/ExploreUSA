// Next
import Head from 'next/head';
import Link from 'next/link';

// Components
import Footer from '@/components/Footer';
import Header from '@/components/Header';

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
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Explore USA! 🇺🇸</h1>
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
}
