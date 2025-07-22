import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Zoom from 'react-img-zoom';
import ImgPreviewBtnType from "../../types/ImgPreviewBtn";

const ImgPrevActive = {
    'active': 'bg-white bg-opacity-30 border-white',
    'normal': 'bg-transparet border-white'
}

function ImagePreview({ image_uris, flavor_text }: { image_uris: { normal: string, art_crop: string }, flavor_text: string }) {
    const [imgDisplayed, setImgDisplayed] = useState<string>('card');

    const currentArtLink = (function () {
        if (imgDisplayed === 'card') return image_uris.normal;
        if (imgDisplayed === 'art_crop') return image_uris.art_crop;
    })();

    return (
        <>
            {imgDisplayed === 'card' && <img className="max-h-[90%] rounded-[28px]" src={image_uris.normal} />}
            {imgDisplayed === 'art_crop' && <div className="rounded-[28px] overflow-hidden" style={{ height: '457px', width: '626px' }}>
                <Zoom height={457} width={626} zoomScale={3} img={image_uris.art_crop} />
            </div>}
            <div className={'absolute right-3 top-1/2 -translate-y-1/2 flex gap-2 flex-col items-end'}>
                <ImgPreviewBtn setImgDisplayed={setImgDisplayed} type="card" img={imgDisplayed}>Card</ImgPreviewBtn>
                <ImgPreviewBtn setImgDisplayed={setImgDisplayed} type="art_crop" img={imgDisplayed}>Art</ImgPreviewBtn>
                <ImgPreviewBtn type="external_link" img={imgDisplayed} link={currentArtLink}>
                    <svg version="1.1" x="0px" y="0px" fill="#fff" width={'13px'} viewBox="0 0 122.6 122.88"><path d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z" /></svg></ImgPreviewBtn>
            </div>
            {(typeof flavor_text !== 'undefined' && imgDisplayed === 'art_crop') && <p className="italic text-white text-center pt-2 max-w-[626px]">{flavor_text}</p>}
        </>
    )
}

function ImgPreviewBtn({ type, img, children, setImgDisplayed, link }: ImgPreviewBtnType) {

    if (setImgDisplayed !== undefined) {
        const refFunc = setImgDisplayed;

        function changeImgPreview() {
            refFunc(type);
        }

        return (
            <button onClick={changeImgPreview} className={`text-white px-3 py-1.5 rounded-md border ${img === type ? ImgPrevActive['active'] : ImgPrevActive['normal']}`}>{children}</button>
        )
    }

    return (
        <a target="_blank" href={link} className={`text-white px-2 py-1.5 rounded-md border border-transparent inline-flex`}>{children}</a>
    )
};


export default ImagePreview;