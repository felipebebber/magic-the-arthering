import { useContext } from "react";
import CardListContext from "../../context/CardList";
import useCardPageStore from "../../store/CardPage";
import VoteBtn from "./voteBtn";
import CardType from "../../types/Card";


function Card({ item, sizes }: { item: CardType, sizes: string }) {

    const setCard = useCardPageStore((state) => state.setCard);
    const { cardSelect } = useContext(CardListContext);

    const image = item.image_uris;

    let isThisCard = false;
    let listVoted = false;

    if (cardSelect !== null) {
        listVoted = true;

        if (cardSelect === item.id) {
            isThisCard = true;
        }
    }

    return (
        <div className={`${sizes} transition-all opacity-100 rounded-[17px]`} style={listVoted && !isThisCard ? { opacity: '.5' } : isThisCard ? { 'boxShadow': '0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem #16a34a, 0 0 0.8rem #16a34a, 0 0 2.8rem #16a34a, inset 0 0 1.3rem #16a34a' } : undefined}>
            <div className="relative group">
                <div className="hover-zoom bg-opacity-50 bg-black h-full absolute z-10 w-full hidden group-hover:flex cursor-pointer rounded-[17px]" onClick={() => setCard(item)}>
                    <svg fill="none" className="w-4/12 h-2/6 m-auto" width="24" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8" /><line x1="21" x2="16.65" y1="21" y2="16.65" /></svg>
                </div>
                <img src={image.normal} className=" rounded-[17px]" />
            </div>
            <VoteBtn id={item.id ? item.id : ''} />

        </div>
    )
};

export default Card;