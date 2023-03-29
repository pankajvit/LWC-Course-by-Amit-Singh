import { api, LightningElement } from 'lwc';

export default class Lwcaura extends LightningElement {
    //message;
    //pageno;

    @api
    childMethod(message, page_no){
        console.log('Child Component Method Executed');
        console.log(message);
        console.log(page_no);
    }
    handleClick(){
        const eve = new CustomEvent(
            "select",
            {
                detail :{
                    message : "LWC Component"
                }
            }
        );
        this.dispatchEvent(eve);

    }
}