"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = require("moment");
require("./styles/modules/MessageBox.scss");
require("./styles/modules/MessagesArea.scss");
var template = require('./messages.html');
var logo = require('./images/especializa_logo.jpg');
console.log('Index started');
var Message = function (text) {
    this.text = text;
    this.created = Date.now();
};
/* eslint no-undef: 0 */
document.getElementById('send').onclick = function () {
    var m = new Message(document.getElementById('message').value);
    document.getElementById('messages').innerHTML += template({
        m: m,
        relativeTime: moment_1.default(m.created).fromNow(),
    });
};
document.getElementById('logo').src = logo;
if (module && module.hot) {
    module.hot.accept();
}
