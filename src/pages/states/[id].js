// Next
import { useRouter } from 'next/router';
import Head from 'next/head';

// Components
import Header from '@/components/Header';

const SingleStatePage = () => {
    const router = useRouter();
    const id = router.query.id;

    if (!id) return null;

    return (
        <>
            <Head>
                <title>{id.toUpperCase()} - Explore USA</title>
                <meta name="description" content="Welcome to Explore USA! Discover the best places to visit, the most delicious foods to try, and the unique specials of each state in the United States." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <Header />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <h1 className="text-4xl text-center font-bold text-gray-800 py-6">
                        Explore the {" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </span>
                    </h1>

                </div>
            </div>

        </>
    );
};

export default SingleStatePage;;