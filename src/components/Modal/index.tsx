import { ReactNode, useCallback, useEffect } from "react";

function Modal({ children, setVisibility, visibility = true }: { children: ReactNode | JSX.Element | JSX.Element[], setVisibility: (arg0: boolean) => void, visibility: boolean }) {

    const escFunction = useCallback((event: KeyboardEvent) => {
        if (event.key === "Escape") {
            setVisibility(false);
        }
    }, []);

    const clickOutside = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains('jsModalRef')) {
            setVisibility(false);
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
        <div className={`fixed transition-all flex z-0 top-0 left-0 bg-black bg-opacity-50 w-full h-full opacity-0 ${visibility ? 'z-30 opacity-100 jsModalRef' : ''}`}>
            <div className={`p-8 w-1/2 m-auto h-[90%] text-white translate-y-full transition-all border border-slate-700`} style={visibility ? { 'transform': 'translateY(0)', backgroundImage: 'linear-gradient(-15deg, #002438, #340e28)' } : undefined}>
                {children}
                <button onClick={() => setVisibility(false)} className="w-8 h-8 rounded-full p-2 absolute top-3 right-3 text-white border border-white">
                    <svg height="100%" width="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                        <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 512,452.922 315.076,256" />
                    </svg>
                </button>
            </div>
        </div>
    )
};

export default Modal;
