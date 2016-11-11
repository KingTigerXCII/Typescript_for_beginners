const CSS_CLASS_TEXTBLOCK = "bwTextblockH2";

export class Textblock implements ITextblock {

    constructor(public headline: string, public text: string) { }

    getTextblockWithCSSClass() {
        return `
                <h1 class= ${ CSS_CLASS_TEXTBLOCK } > ${ this.headline } </h1>
                <div><p> ${ this.text } </p></div>
                `;
    }

    getTextblock() {
        return `
                <h1> ${ this.headline } </h1>
                <div><p> ${ this.text } </p></div>
                `;       
    }

};

interface ITextblock {

    headline: string;
    text: string;

    getTextblock();
    getTextblockWithCSSClass();

};
