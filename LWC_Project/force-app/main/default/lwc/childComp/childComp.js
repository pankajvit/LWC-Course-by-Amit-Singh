import { LightningElement, api } from 'lwc';

export default class ChildComp extends LightningElement {
    @api message;
    @api pageno;

    date = new Date();

    @api
    childMethod(messageFromParent, page_no){
        this.date = new Date();
        this.message = messageFromParent;
        this.pageno = page_no;
    }
    handleClick(){
        const eventS = new CustomEvent('simple',
            {
                bubbles : true,
                composed : false
            });

        this.dispatchEvent(eventS);
    }
}