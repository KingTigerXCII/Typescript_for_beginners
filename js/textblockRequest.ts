import { Textblock } from "./modules";

export class TextblockRequest {

    public createTextblock(numberOfTextblocks: number) {

        console.log("Request Textblocks");
        let arrayOfTextblocks: Textblock[] = new Array(); 

        
        for(let i = 0; i < numberOfTextblocks; i++)
        {
            let indexOfArray = arrayOfTextblocks.push(new Textblock("I'm a textblock " + i, "My name is ......."));
            console.log(indexOfArray); 
            document.body.innerHTML += arrayOfTextblocks[indexOfArray-1].getTextblockWithCSSClass();
        }

    }

}


