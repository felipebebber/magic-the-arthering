function formatDate(date: string) {
    const dateSplit = date.split('-');
    const dateFormat = dateSplit[2] + '/' + dateSplit[1] + '/' + dateSplit[0];
    return dateFormat
}

function manaConverter(manaArray: string) {
    let manaRef: string | string[] = manaArray;
    if (manaArray !== '') {
        manaRef = manaArray.replaceAll('{', '').replaceAll('}', ',').replaceAll('/', '').split(',');
        manaRef.pop();
        return manaConverTerImg(manaRef);
    }
    return manaRef
}

function manaConverTerImg(mana: string[]) {
    return (
        mana.map(function (item, index) {
            return <span key={index + 'manaconvert'} className={`card-symbol-${item}`}></span>
        })
    )
}

function formatName(name: string, id: number) {
    console.log(name.split(' // ')[id]);
    return name.split(' // ')[id];
}

function formatContent(content: string) {
    const parsedContent = (function () {

        let newContent: string | string[] = content.replaceAll('\n', 'breaksplitbrbreaksplit');
        newContent = newContent.replaceAll('{1}', `breaksplit1breaksplit`);
        newContent = newContent.replaceAll('{2}', `breaksplit2breaksplit`);
        newContent = newContent.replaceAll('{3}', `breaksplit3breaksplit`);
        newContent = newContent.replaceAll('{4}', `breaksplit4breaksplit`);
        newContent = newContent.replaceAll('{5}', `breaksplit5breaksplit`);
        newContent = newContent.replaceAll('{6}', `breaksplit6breaksplit`);
        newContent = newContent.replaceAll('{7}', `breaksplit7breaksplit`);
        newContent = newContent.replaceAll('{8}', `breaksplit8breaksplit`);
        newContent = newContent.replaceAll('{9}', `breaksplit9breaksplit`);
        newContent = newContent.replaceAll('{10}', `breaksplit10breaksplit`);
        newContent = newContent.replaceAll('{T}', `breaksplitTbreaksplit`);
        newContent = newContent.replaceAll('{R}', `breaksplitRbreaksplit`);
        newContent = newContent.replaceAll('{A}', `breaksplitAbreaksplit`);
        newContent = newContent.replaceAll('{U}', `breaksplitUbreaksplit`);
        newContent = newContent.replaceAll('{B}', `breaksplitBbreaksplit`);
        newContent = newContent.replaceAll('{G}', `breaksplitGbreaksplit`);
        newContent = newContent.replaceAll('{W}', `breaksplitWbreaksplit`);
        newContent = newContent.replaceAll('{B/P}', `breaksplitBPbreaksplit`);
        newContent = newContent.replaceAll('{B/R}', `breaksplitBRbreaksplit`);
        newContent = newContent.replaceAll('{C}', `breaksplitCbreaksplit`);
        newContent = newContent.replaceAll('{S}', `breaksplitSbreaksplit`);
        newContent = newContent.replaceAll('{E}', `breaksplitEbreaksplit`);

        newContent = newContent.split('breaksplit');

        const newArray = newContent.map(function (i, index) {
            if (i === 'br') {
                return <span key={index + 'formatcontent'} className="mb-1.5 block"></span>;
            }

            if (i === 'T' || i === 'E' || i === 'S' || i === 'C' || i === 'BR' || i === 'BP' || i === '1' || i === '2' || i === '3' || i === '4' || i === '5' || i === '6' || i === '7' || i === '8' || i === '9' || i === '10' || i === 'T' || i === 'R' || i === 'A' || i === 'U' || i === 'B' || i === 'G' || i === 'W') {
                return <span key={index + 'formatcontent'} className={`card-symbol-${i} card-symbol--small`}></span>
            }

            return i;
        });

        return newArray;
    })();

    return parsedContent;
}

export { formatName, formatContent, manaConverTerImg, formatDate, manaConverter };