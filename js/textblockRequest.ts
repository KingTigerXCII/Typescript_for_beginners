import { Textblock } from "./modules";

export class TextblockRequest {

    constructor() {

        console.log("Request Textblocks");

    }

    public createTextblock(numberOfTextblocks: number) {

        console.log("Request Textblocks");
        let arrayOfTextblocks: Textblock[] = new Array(); 

        /*
        for(let i = 0; i < numberOfTextblocks; i++)
        {

        }
        */

        let indexOfArray = arrayOfTextblocks.push(new Textblock("I'm a textblock ", "My name is .......")); 
        document.body.innerHTML += arrayOfTextblocks[0].getTextblockWithCSSClass();

    }

}


