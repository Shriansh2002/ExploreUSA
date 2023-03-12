import Link from 'next/link';

import states from '@/data/statesData.json';
import Header from '@/components/Header';

export default function StatesPage() {
    return (
        <>
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Explore the United States</h1>
                {states.length} States
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {states.map(state => (
                        <div key={state.name} className="bg-white rounded-lg shadow-md hover:shadow-lg">
                            <Link href={`/states/${state.name.toLowerCase()}`}>
                                <div>
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={state.image_url}
                                            alt={`Image of ${state.name}`}
                                            className="absolute inset-0 object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h2 className="text-xl font-bold mb-2">{state.name}</h2>
                                        <p className="text-gray-600 mb-4 h-20">{state.description}</p>
                                        <div className="flex flex-wrap">
                                            <div className="w-full sm:w-1/2">
                                                <p className="text-sm font-medium text-gray-500">Capital</p>
                                                <p className="text-lg font-semibold">{state.capital}</p>
                                            </div>
                                            <div className="w-full sm:w-1/2">
                                                <p className="text-sm font-medium text-gray-500">Largest City</p>
                                                <p className="text-lg font-semibold">{state.largest_city}</p>
                                            </div>
                                            <div className="w-full sm:w-1/2">
                                                <p className="text-sm font-medium text-gray-500">Region</p>
                                                <p className="text-lg font-semibold">{state.region}</p>
                                            </div>
                                            <div className="w-full sm:w-1/2">
                                                <p className="text-sm font-medium text-gray-500">Abbreviation</p>
                                                <p className="text-lg font-semibold">{state.abbreviation}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}
