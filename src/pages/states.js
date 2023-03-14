import states from '@/data/statesData.json';

// Components
import Header from '@/components/Header';
import StateCard from '@/components/StateCard';

export default function StatesPage() {
    return (
        <>
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h1 className="text-4xl text-center font-bold text-gray-800 py-6">
                    Explore the United States
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-between">
                    {states.map((state, _idx) => (
                        <StateCard key={_idx} state={state} />
                    ))}
                </div>
            </div>


        </>
    );
}
