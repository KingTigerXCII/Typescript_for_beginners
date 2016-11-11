"use strict";
const CSS_CLASS_TEXTBLOCK = "bwTextblockH2";
class Textblock {
    constructor(headline, text) {
        this.headline = headline;
        this.text = text;
    }
    getTextblockWithCSSClass() {
        return `
                <h1 class= ${CSS_CLASS_TEXTBLOCK} > ${this.headline} </h1>
                <div><p> ${this.text} </p></div>
                `;
    }
    getTextblock() {
        return `
                <h1> ${this.headline} </h1>
                <div><p> ${this.text} </p></div>
                `;
    }
}
exports.Textblock = Textblock;
;
;
