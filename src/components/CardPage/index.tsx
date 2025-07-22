import { useCallback, useEffect } from "react";
import useCardPageStore from "../../store/CardPage";
import { formatContent, formatDate, manaConverter } from "../../utils/CardPage";
import ImagePreview from "./ImagePreview";
import CardType from "../../types/Card";
import RarityColorType from "../../types/RarityColor";

const rarityColor = {
    common: 'text-white',
    uncommon: 'text-slate-400',
    rare: 'text-yellow-500',
    mythic: 'text-red-500'
}

function CardPage() {
    const card = useCardPageStore(state => state.card);
    const setCard = useCardPageStore(state => state.setCard);

    const escFunction = useCallback((event: { key: string; }) => {
        if (event.key === "Escape") {
            setCard(null);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

    if (card !== null) {
        const { name, type_line, released_at, artist, rarity, image_uris, card_faces, flavor_text, oracle_text, mana_cost, power, toughness }: CardType = card;

        const rarityRef = rarity !== undefined ? rarity : 'common';
        const oracleRef = oracle_text !== undefined ? oracle_text : '';
        const releasedAtRef = released_at !== undefined ? released_at : '';
        const manaCostRef = mana_cost !== undefined ? mana_cost : '';

        return (
            <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-black bg-opacity-90 z-20 flex items-center">
                <div className="flex-1 h-full flex items-center justify-center relative flex-col">
                    <ImagePreview image_uris={typeof image_uris !== 'undefined' ? image_uris : card_faces[0].image_uris} flavor_text={flavor_text ? flavor_text : ''} />
                </div>
                <div className={`ml-auto h-full text-slate-200 w-5/12 flex`} style={{ backgroundImage: `linear-gradient(-15deg, #002438, #340e28)` }}>
                    <div className="p-8 leading-tight flex-1 border-l border-l-slate-700">
                        <div className="text-2xl flex flex-wrap gap-2 items-center"><b>{name}</b> {manaCostRef !== '' && <div className="inline-flex gap-1">{manaConverter(manaCostRef)}</div>}
                        </div>
                        <div className="text-slate-300 text-md">{type_line}</div>
                        <div className={rarityColor[rarityRef as keyof RarityColorType]}>{rarity}</div>
                        <div className=" pb-5 mb-5 border-b border-slate-700 "></div>
                        <p className=" pr-12">
                            {oracleRef !== '' && formatContent(oracleRef)}
                            {typeof flavor_text !== 'undefined' && <>
                                {oracle_text !== '' && <><br /><br /></>}
                                <span className="text-slate-400">
                                    <i>{flavor_text}</i></span>
                            </>}
                        </p>
                        <div className="relative">
                            <div className=" pb-5 mb-5 border-b border-slate-700 "></div>
                            {typeof power !== 'undefined' && <div className="inline-flex px-2.5 py-1.5 rouded-md bg-gray-500 top-0 right-3 absolute font-bold" style={{ borderRadius: '6px', boxShadow: '0 2px 10px 1px #111', textShadow: '0 0 black' }}>
                                {power}/{toughness}
                            </div>}
                        </div>
                        <div className="flex gap-8 flex-wrap">
                            <div className="">
                                <div className="text-gray-400 text-xs uppercase">Artist</div>
                                {artist}
                            </div>
                            {releasedAtRef !== '' &&
                                <div className="">
                                    <div className="text-gray-400 text-xs uppercase">Released</div>
                                    {formatDate(releasedAtRef)}
                                </div>
                            }
                        </div>
                        <div className=" pb-5 mb-5 border-b border-slate-700"></div>
                        <div className="rounded-md overflow-hidden border border-slate-700">
                            <b className="bg-slate-600 py-2 px-4 block">
                                Votes
                            </b>
                            <div className="flex flex-wrap divide-x divide-slate-600 leading-tight">
                                <div className="px-4 py-2 flex-1 bg-opacity-5 bg-white">
                                    <div className="text-gray-400 text-xs uppercase">Color</div>
                                    <span className="text-lg leading-tight">10</span>
                                </div>
                                <div className="px-4 py-2 flex-1 bg-opacity-5 bg-white">
                                    <div className="text-gray-400 text-xs uppercase">Random</div>
                                    <span className="text-lg leading-tight">10</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setCard(null)} className="w-8 h-8 rounded-full p-2 absolute top-3 right-3 text-white border border-white">
                            <svg height="100%" width="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 512,452.922 315.076,256" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div >
        )
    } else {
        <></>
    }
};

export default CardPage;