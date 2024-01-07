"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var slugify = function (text, mark) {
    var removeDiacritics = function (s) {
        return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };
    return text
        .toLowerCase()
        .replace(/[^\w\u0600-\u06FF]+/g, mark)
        .replace(/[^a-zA-Z\u0621-\u064A]+/g, mark)
        .replace(/./g, removeDiacritics)
        .replace(/^-+|-+$/g, "");
};
exports.default = slugify;
