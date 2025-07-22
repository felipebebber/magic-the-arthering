function Filter({ currentFilter, setCurrentFilter }: { currentFilter: string, setCurrentFilter: (arg0: string) => void }) {
    const classActive = 'bg-white bg-opacity-20 border-gray-400 border px-2 py-1 rounded-md text-white'
    return (
        <div className="flex gap-5 justify-center mb-4 mt-2">
            <button onClick={() => setCurrentFilter('random')} className={`${currentFilter == 'random' ? classActive : 'text-gray-300'}`}>Random</button>
            <button onClick={() => setCurrentFilter('red')} className={`${currentFilter == 'red' ? classActive : 'text-gray-300'}`}>Red</button>
            <button onClick={() => setCurrentFilter('green')} className={`${currentFilter == 'green' ? classActive : 'text-gray-300'}`}>Green</button>
            <button onClick={() => setCurrentFilter('blue')} className={`${currentFilter == 'blue' ? classActive : 'text-gray-300'}`}>Blue</button>
            <button onClick={() => setCurrentFilter('black')} className={`${currentFilter == 'black' ? classActive : 'text-gray-300'}`}>Black</button>
            <button onClick={() => setCurrentFilter('white')} className={`${currentFilter == 'white' ? classActive : 'text-gray-300'}`}>White</button>
            <button onClick={() => setCurrentFilter('multicolored')} className={`${currentFilter == 'multicolored' ? classActive : 'text-gray-300'}`}>Multicolored</button>
            <button onClick={() => setCurrentFilter('colorless')} className={`${currentFilter == 'colorless' ? classActive : 'text-gray-300'}`}>Colorless</button>
            <button onClick={() => setCurrentFilter('land')} className={`${currentFilter == 'land' ? classActive : 'text-gray-300'}`}>Land</button>
        </div>
    )
};


export default Filter;
