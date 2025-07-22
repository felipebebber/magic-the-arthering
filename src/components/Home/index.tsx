import { useState } from "react";
import Filter from "../Filter";
import Title from "./title";
import CardListWrapper from "./cardlist";
import Timer from "../Timer";

function Home() {
    const [currentFilter, setCurrentFilter] = useState('random');

    return (
        <div className="h-screen overflow-hidden bg-gray-900 text-white flex items-center justify-center z-10 relative" style={{ backgroundImage: "linear-gradient(-15deg, #002438cc, #340e28cc), url(./assets/images/bg.jpg)", backgroundSize: 'cover' }}>
            <div>
                <Title />
                <Filter currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />
                <CardListWrapper currentFilter={currentFilter} />
            </div>
            <Timer />
        </div>
    )
}

export default Home