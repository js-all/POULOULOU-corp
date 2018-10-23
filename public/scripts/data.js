var data;
let dataXHR = new XMLHttpRequest();
dataXHR.open('GET', '../data/data.json');
dataXHR.responseType = 'json';
let d;
dataXHR.onloadstart = function() {
    d = new Date();
}
dataXHR.onload = function() {
    if (this.status = 200) {
        data = this.response;
        for(let i in data.color) {
            const e = data.color[i];
            for (let j in e) {
                const el = e[j];
                e[j] = new rgb(el[0], el[1], el[2]).get();
            }
        }
    }
}
dataXHR.onloadend = function() {console.log('%cdata load finish in %c%sms','color:blue','color:green',(new Date().getTime()-d.getTime()));call()}
dataXHR.send();