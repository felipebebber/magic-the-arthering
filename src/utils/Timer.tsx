
function returnNextDate() {
    const crrDate = new Date();
    let lastMinute = crrDate.getMinutes();

    if (lastMinute > 9) {
        lastMinute = parseInt(('' + lastMinute)[1])
    }

    let totalMinutes = 0;
    let totalSeconds = 60 - crrDate.getSeconds();

    if (totalSeconds == 60 && (lastMinute == 0 || lastMinute == 5)) {
        totalSeconds = 0;
        totalSeconds = 0;

    } else {
        if (lastMinute >= 5) {
            totalMinutes = 9 - lastMinute;
        } else {
            totalMinutes = 4 - lastMinute;
        }
        if (totalSeconds === 60) {
            totalSeconds = 0;
            totalMinutes++;
        }
    }

    const timing = `${checkforZero(totalMinutes)}:${checkforZero(totalSeconds)}`;
    // console.log(timing);
    return timing;
}

function checkforZero(n: number) {
    return n > 9 ? n : `0${n}`;
}


export { returnNextDate, checkforZero }