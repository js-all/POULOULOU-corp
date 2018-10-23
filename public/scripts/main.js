const CONTAINER = document.getElementById('container');

var pannel = 0; //0: loading; 1:charged;

function setEl() {
    if (pannel == 0) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET','../html/pannel/1.html', true);
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
        xhr.onloadend = function() {
            console.log('%call data load finish in %c%sms','color:red','color:green',(new Date().getTime()-d.getTime()));
            panel1();
        }
        xhr.send();
    } else if (pannel == 1) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET','../html/pannel/2.html', true);
        xhr.responseType = 'text';
        xhr.onload = function(e) {
            if (this.status == 200) {
                CONTAINER.innerHTML = CONTAINER.innerHTML + this.response;
            } else if (this.status == 404) {
                CONTAINER.innerHTML = '404 ERROR';
            } else {
                CONTAINER.innerHTML = 'ERROR';
            }
        }
        xhr.onloadend = panel2;
        xhr.send();
    }
}
setEl();
