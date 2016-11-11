"use strict";
const modules_1 = require("./modules");
class TextblockRequest {
    createTextblock(numberOfTextblocks) {
        console.log("Request Textblocks");
        let arrayOfTextblocks = new Array();
        /*
        for(let i = 0; i < numberOfTextblocks; i++)
        {

        }
        */
        let indexOfArray = arrayOfTextblocks.push(new modules_1.Textblock("I'm a textblock ", "My name is ......."));
        document.body.innerHTML += arrayOfTextblocks[0].getTextblockWithCSSClass();
    }
}
exports.TextblockRequest = TextblockRequest;
