const CONTAINER = document.getElementById('container');

var pannel = 0; //0: loading; 1:charged;

function addEl() {
    if (pannel == 0) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET','../html/pannel/1.html', true);
        console.log(1);
        xhr.responseType = 'text';
        xhr.onload = function(e) {
            if (this.status == 200) {
                CONTAINER.innerHTML = this.response;
            } else if (this.status == 404) {
                CONTAINER.innerHTML = '404 ERROR';
            } else {
                CONTAINER.innerHTML = 'ERROR';
            }
        }
        xhr.send();
    } else if (pannel == 1) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET','../html/pannel/2.html', true);
        console.log(1);
        xhr.responseType = 'text';
        xhr.onload = function(e) {
            if (this.status == 200) {
                CONTAINER.innerHTML = this.response;
            } else if (this.status == 404) {
                CONTAINER.innerHTML = '404 ERROR';
            } else {
                CONTAINER.innerHTML = 'ERROR';
            }
        }
        xhr.send();
    }
}
addEl();
setTimeout(() => {
    pannel = 1;
    addEl();
},2000)