import { useCallback, useEffect, useState } from "react";
import Modal from "../Modal";

function User() {
    const [userMenu, setUserMenu] = useState(false);
    const [rankingMenu, setRankingMenu] = useState(false);

    const escFunction = useCallback((event: KeyboardEvent) => {
        if (event.key === "Escape") {
            setUserMenu(false);
        }
    }, []);

    const clickOutside = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains('jsUserMenu')) {
            setUserMenu(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        document.addEventListener('click', clickOutside, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
            document.removeEventListener('click', clickOutside, false);
        };
    }, [escFunction]);

    return (
        <>
            <div className="fixed top-4 right-4 z-10 flex items-center gap-4">
                <button onClick={() => setRankingMenu(true)}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.67 22.75H2C1.59 22.75 1.25 22.41 1.25 22V16C1.25 14.48 2.48 13.25 4 13.25H8.67C9.08 13.25 9.42 13.59 9.42 14V22C9.42 22.41 9.08 22.75 8.67 22.75ZM2.75 21.25H7.92V14.75H4C3.31 14.75 2.75 15.31 2.75 16V21.25Z" fill="#fff" /><path d="M15.3302 22.75H8.66016C8.25016 22.75 7.91016 22.41 7.91016 22V12C7.91016 10.48 9.14016 9.25 10.6602 9.25H13.3302C14.8502 9.25 16.0802 10.48 16.0802 12V22C16.0802 22.41 15.7502 22.75 15.3302 22.75ZM9.42015 21.25H14.5902V12C14.5902 11.31 14.0302 10.75 13.3402 10.75H10.6702C9.98015 10.75 9.42015 11.31 9.42015 12V21.25Z" fill="#fff" /><path d="M22.0001 22.75H15.3301C14.9201 22.75 14.5801 22.41 14.5801 22V17C14.5801 16.59 14.9201 16.25 15.3301 16.25H20.0001C21.5201 16.25 22.7501 17.48 22.7501 19V22C22.7501 22.41 22.4101 22.75 22.0001 22.75ZM16.0801 21.25H21.2501V19C21.2501 18.31 20.6901 17.75 20.0001 17.75H16.0801V21.25Z" fill="#fff" /><path d="M13.6999 8.34999C13.4599 8.34999 13.1599 8.27997 12.8199 8.07997L11.9999 7.58998L11.1899 8.06999C10.3699 8.55999 9.82989 8.26998 9.62989 8.12998C9.42989 7.98998 8.99989 7.54998 9.20989 6.62998L9.39989 5.79997L8.71989 5.11997C8.29989 4.69997 8.14989 4.19997 8.29989 3.73997C8.44989 3.27997 8.85989 2.95996 9.43989 2.85996L10.3099 2.70997L10.7999 1.72999C11.3399 0.65999 12.6499 0.65999 13.1799 1.72999L13.6699 2.70997L14.5399 2.85996C15.1199 2.95996 15.5399 3.27997 15.6799 3.73997C15.8299 4.19997 15.6699 4.69997 15.2599 5.11997L14.5799 5.79997L14.7699 6.62998C14.9799 7.55998 14.5499 7.98999 14.3499 8.13999C14.2599 8.21999 14.0299 8.34999 13.6999 8.34999ZM11.9999 6.07997C12.2399 6.07997 12.4799 6.13999 12.6799 6.25999L13.2399 6.58998L13.1199 6.04997C13.0199 5.62997 13.1699 5.11998 13.4799 4.80998L13.9899 4.29997L13.3599 4.18998C12.9599 4.11998 12.5699 3.82998 12.3899 3.46998L11.9999 2.71998L11.6199 3.46998C11.4399 3.82998 11.0499 4.11998 10.6499 4.18998L10.0199 4.28999L10.5299 4.79997C10.8399 5.10997 10.9799 5.61999 10.8899 6.03999L10.7699 6.57997L11.3299 6.24998C11.5199 6.12998 11.7599 6.07997 11.9999 6.07997Z" fill="#fff" /></svg>
                </button>
                <button onClick={() => setUserMenu(true)}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div className={`fixed transition-all flex z-0 top-0 left-0 bg-black bg-opacity-50 w-full h-full opacity-0 ${userMenu ? 'z-30 opacity-100 jsUserMenu' : ''}`}>
                <div className={`p-8 w-1/2 ml-auto text-white translate-x-full transition-all border-l border-l-slate-700`} style={userMenu ? { 'transform': 'translateX(0)', backgroundImage: 'linear-gradient(-15deg, #002438, #340e28)' } : undefined}>
                    <div className="text-4xl font-bold texturina text-yellow-400">Felipe B</div>
                    <div className="text-white">fbebber1@xyz.com.br</div>
                    <div className=" pb-5 mb-5 border-b border-slate-700"></div>
                    <div className="flex-wrap gap-2 grid grid-cols-3">
                        <div className="px-4 py-2 bg-opacity-5 bg-white">
                            <div className="text-gray-400 text-xs uppercase">Votes</div>
                            <span className="text-lg leading-tight">1.300</span>
                        </div>
                        <div className="px-4 py-2 bg-opacity-5 bg-white">
                            <div className="text-gray-400 text-xs uppercase">Most Voted Color</div>
                            <span className="text-lg leading-tight">Green (300)</span>
                        </div>
                        <div className="px-4 py-2 bg-opacity-5 bg-white">
                            <div className="text-gray-400 text-xs uppercase">Less Voted Color</div>
                            <span className="text-lg leading-tight">Black (15)</span>
                        </div>
                        <div className="px-4 py-2 bg-opacity-5 bg-white">
                            <div className="text-gray-400 text-xs uppercase">Most Voted Type</div>
                            <span className="text-lg leading-tight">Creature (500)</span>
                        </div>
                        <div className="px-4 py-2 bg-opacity-5 bg-white">
                            <div className="text-gray-400 text-xs uppercase">Most Voted Set</div>
                            <span className="text-lg leading-tight">Shadowmoor (5)</span>
                        </div>
                        <div className="px-4 py-2 bg-opacity-5 bg-white">
                            <div className="text-gray-400 text-xs uppercase">Most Voted Card</div>
                            <span className="text-lg leading-tight">Vizzerdrix (2)</span>
                        </div>
                    </div>
                    <div className=" pb-5 mb-5 border-b border-slate-700"></div>
                    <div>
                        Last Votes:
                        <ol>
                            <li><a target="_blank" className="text-gray-400" href={`https://scryfall.com/search?q=Vizzerdrix`}><u>Vizzerdrix</u></a></li>
                            <li><a target="_blank" className="text-gray-400" href={`https://scryfall.com/search?q=Weirding Shaman`}><u>Weirding Shaman</u></a></li>
                            <li><a target="_blank" className="text-gray-400" href={`https://scryfall.com/search?q=Pest Control`}><u>Pest Control</u></a></li>
                            <li><a target="_blank" className="text-gray-400" href={`https://scryfall.com/search?q=Juggernaut`}><u>Juggernaut</u></a></li>
                        </ol>
                    </div>
                </div>
                <button onClick={() => setUserMenu(false)} className="w-8 h-8 rounded-full p-2 absolute top-3 right-3 text-white border border-white">
                    <svg height="100%" width="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                        <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 512,452.922 315.076,256" />
                    </svg>
                </button>
            </div>
            <Modal visibility={rankingMenu} setVisibility={setRankingMenu}>oi</Modal>
        </>
    )
};

export default User;
