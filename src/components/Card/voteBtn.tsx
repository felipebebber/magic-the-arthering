import { useContext, useState } from "react";
import CardListContext from "../../context/CardList";

function VoteBtn({ id }: { id: string }) {
    const [active, setActive] = useState(false);
    const { cardSelect, setCardSelected } = useContext(CardListContext);

    if (!cardSelect || cardSelect && active) {
        return (
            <button className={`py-1 mt-2 rounded-md border mx-auto self-center items-center flex text-white group transition-all ${active ? 'px-3 border-green-600' : 'px-0.5 border-gray-500'}`} style={{ backgroundImage: !active ? 'linear-gradient(-15deg, rgb(0, 36, 56), rgb(52, 14, 40))' : 'linear-gradient(#09431e, #18b451)' }} onClick={() => { setActive(true); setCardSelected(id) }}>
                <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="28px" height="28px" viewBox="0 0 32 32" xmlSpace="preserve" fill="currentColor" className={`transition-all ${!active ? 'scale-100 max-w-100' : 'scale-0 max-w-0'}`}>
                    <path d="M7,6c0-2.757,2.243-5,5-5s5,2.243,5,5c0,1.627-0.793,3.061-2,3.974V6c0-1.654-1.346-3-3-3
                        S9,4.346,9,6v3.974C7.793,9.061,7,7.627,7,6z M24,13c-1.104,0-2,0.896-2,2v-1c0-1.104-0.896-2-2-2s-2,0.896-2,2v-1
                        c0-1.104-0.896-2-2-2s-2,0.896-2,2V6c0-1.104-0.896-2-2-2s-2,0.896-2,2v10.277C9.705,16.106,9.366,16,9,16c-1.104,0-2,0.896-2,2v3
                        c0,0.454,0.155,0.895,0.438,1.249L11,28h12l2.293-3.293C25.682,24.318,26,23.55,26,23v-8C26,13.896,25.104,13,24,13z M11,29v1
                        c0,0.552,0.447,1,1,1h10c0.553,0,1-0.448,1-1v-1H11z"/>
                </svg>
                <span className={`transition-all ${!active ? 'scale-0 max-w-0' : 'scale-100 max-w-full'}`}>Voted!</span>
                {!active && <span className="block max-w-0 overflow-hidden group-hover:max-w-[300px] transition-all group-hover:pr-1">Vote</span>}
            </button>
        )
    }
    return <></>
};

export default VoteBtn;
