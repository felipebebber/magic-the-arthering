import { useEffect, useState } from "react";
import useCardListStore from "../../store/CardList";
import { returnNextDate } from "../../utils/Timer";

function Timer() {
    // const [lastDate, setLastDate] = useState(new Date());
    const [crrDate, setCrrDate] = useState(returnNextDate());

    const setKey = useCardListStore((state) => state.setKey);

    useEffect(() => {

        const intervalo = setInterval(function () {
            setCrrDate(returnNextDate());
        }, 200);

        if (crrDate === "04:59") {
            setKey();
        }

        return () => {
            clearInterval(intervalo);
        };

    }, [crrDate]);

    return (
        <div className="fixed bottom-0 right-2 rounded-t-xl w-32 h-16 text-center py-2 border-t border-r border-l border-gray-500" style={{
            "backgroundImage": "linear-gradient(-15deg, rgb(0, 36, 56), rgb(52, 14, 40))"
        }}><span className="text-gray-400">Next Voting</span>
            <div>{crrDate}</div>
        </div>
    )
}

export default Timer;