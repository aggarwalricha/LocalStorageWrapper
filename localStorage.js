'use strict';

localStorage.clear();

var _setItem = Storage.prototype.setItem; // saving original copies
var _getItem = Storage.prototype.getItem;

var _localStorage = Object.create(localStorage);

_localStorage.getItem = function (key)
{
    return JSON.stringify(this[key]);
}

_localStorage.setItem = function (key, value)
{
    var pair = this[this.domain] || {};
    pair[key] = value;

    Object.defineProperty(this, this.domain, { value: pair, writable: true });
}

function setLocalStorageDomain(domainName)
{
    localStorage.clear();
    Object.defineProperty(_localStorage, 'domain', { enumerable: false, value: domainName, writable: true }); 
};

localStorage.__proto__ = Object.create(Storage.prototype);
Object.defineProperties(localStorage.__proto__, {
    'setItem': {
        value: function (key,value)
        {
            _localStorage.setItem(key, value);
            _setItem.apply(this, arguments);
        },

        enumerable: false
    },
    'getItem': {
        value: function (key)
        {
            return _getItem.apply(this, arguments);
        },
        enumerable: false
    }
});
