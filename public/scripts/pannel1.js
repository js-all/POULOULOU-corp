function ttte() {
    const ROWS = document.getElementsByClassName('cc');
    const CENTER = ROWS[Math.floor(ROWS.length/2)];
    const CHR = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
    ];
    var CHRU = [];
    for (let i of CHR) {
        CHRU.push(i.toUpperCase());
    }
    console.log(CENTER)
    function text(ff, sp, bs, f, n, ca) {
        const p = document.getElementById('pppcc3');
        if (f) {
            ca();
            return;
        }
        if (!ff) {
            if (sp < 320) {
                p.innerHTML = CHRU[n];;
                n = n == CHRU.length-1 ? 0 : n+1;
                sp += sp/20;
            } else {
                p.innerHTML = data.string.load.word.substring(0,1).toUpperCase();
                ff = true;
            }
        } else {
            sp = bs;
            let ool = Math.floor(Math.random() * 2) == 0;
            let rand = Math.floor(Math.random() * (150+1));
            if (ool) {
                sp += rand;
            } else {
                sp -= rand;
            }
            p.innerHTML = data.string.load.word.substring(0,p.innerHTML.length+1);
            if (p.innerHTML.length >= data.string.load.word.length) {
                f = true;
            }
        }
        setTimeout(text, sp, ff, sp, bs, f, n, ca);
    }
    text(false, 1, 200, false, 0, () => {
        for (let i of ROWS) {
            i.style.animationName = 'ccA';
        }
    });
    for (let i = 0; i < ROWS.length; i++) {
        const e = ROWS[i];
        const delay = (ROWS.length*250)-(250*i);
        e.style.animationDelay = delay+'ms';
    }
}