function dataToCssVar() {
    let res = '';
    for (let i in data) {
        const j = data[i];
        let b1 = '--data-'+i;
        for (let k in j) {
            const l = j[k];
            for (let m in l) {
                const n = l[m];
                res += b2+'-'+m+': '+n+';';
            }
        }
    }
    return res;
}
function v() {
    document.body.style = 
    `--window-width: ${window.innerWidth}px;`+
    `--window-height: ${window.innerHeight}px;`+
    dataToCssVar();
}
v();
window.addEventListener('resize',() => {
    v();
})