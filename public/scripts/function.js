Number.prototype.for = function(f) {
    if (f == undefined) {
        throw new TypeError("Number.prototype.for, f is required");
    }
    if (typeof f != 'function') {
        throw new TypeError("Number.prototype.for, f must ba a function")
    }
    for (let i = 0;i < this;i++) {
        f(i);
    }
    return i;
}
document.createEl = function(type = 'div', attr = {}, childOf = document.body, callBack = () => {}) {
    if (typeof type != 'string') {
        throw new TypeError('document.createEl, type of type must be string');
    } if (typeof attr != 'object') {
        throw new TypeError('document.createEl, type of attr must be Object');
    } if (!childOf instanceof HTMLElement) {
        throw new TypeError('document.createEl, type of childOf must be HTMLElement');
    } if (typeof callBack != 'function') {
        throw new TypeError('document.createEl, type of callBack must be function');
    }
    let e = document.createElement(type);
    for (let i in attr) {
        const at = attr[i];
        e.setAttribute(i, at);
    }
    childOf.appendChild(e);
    callBack(e);
    return e;
}
