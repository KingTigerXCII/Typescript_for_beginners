"use strict";
class TextblockRequest {
    createTextblock(numberOfTextblocks) {
        console.log("Request Textblocks");
        let arrayOfTextblocks = new Array();
        /*
        for(let i = 0; i < numberOfTextblocks; i++)
        {

        }
        */
        let indexOfArray = arrayOfTextblocks.push(new Textblock("I'm a textblock ", "My name is ......."));
        document.body.innerHTML += arrayOfTextblocks[0].getTextblockWithCSSClass();
    }
}
exports.TextblockRequest = TextblockRequest;
