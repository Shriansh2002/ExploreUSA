// Next
import Head from 'next/head';

// Data
import states from '@/data/statesData.json';

// Components
import Header from '@/components/Header';
import StateCard from '@/components/StateCard';

export default function StatesPage() {
    return (
        <>
            <Head>
                <title>STATES - Explore USA</title>
                <meta name="description" content="Welcome to Explore USA! Discover the best places to visit, the most delicious foods to try, and the unique specials of each state in the United States." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <>
                <Header />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <h1 className="text-4xl mb-10 text-center font-bold text-gray-800 py-6">
                        Explore the {" "}
                        <span className="text-transparent uppercase bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                            United States
                        </span>
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-between">
                        {states.map((state, _idx) => (
                            <StateCard key={_idx} state={state} />
                        ))}
                    </div>
                </div>
            </>

        </>
    );
}
