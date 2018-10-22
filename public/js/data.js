var data;
let dataXHR = new XMLHttpRequest();
dataXHR.open('GET', '../json/data.json');
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
                e[j] = new rgb(el[0], el[1], el[2]);
            }
        }
    }
}
dataXHR.onloadend = function() {console.log('data load finish in %sms',(new Date().getTime()-d.getTime()))}
dataXHR.send();