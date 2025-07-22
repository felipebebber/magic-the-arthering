function Title() {
    return (
        <div className="flex items-center justify-center gap-8 mb-12">
            <b className="leading-none texturina relative">
                <span className="text-[7rem] uppercase text-yellow-400" style={{ "WebkitTextStroke": "2px red", "lineHeight": "40px" }}>
                    M<span className="text-[4rem] align-top" style={{ "verticalAlign": "31px" }}>agic</span>
                </span>
                <span className="text-[1.5rem]" style={{
                    "position": "absolute",
                    "left": "117px",
                    "width": "auto",
                    "whiteSpace": "nowrap",
                    "top": "55px",
                }}>
                    the <span className="text-yellow-200">Arthering</span>
                </span>
            </b>
            <p className="text-left mt-2">
                <span className="uppercase text-[1rem] leading-none text-gray-400">Vote for</span><br />
                <span className="text-[1.5rem] leading-none texturina">Best MTG Card Artwork</span>
            </p>
        </div>
    )
};

export default Title;
