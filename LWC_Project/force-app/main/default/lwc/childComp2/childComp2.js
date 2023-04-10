import { LightningElement, api } from 'lwc';

export default class ChildComp2 extends LightningElement {
    @api name;
    
    date = new Date();

    @api
    childMethod(messageFromParent){
        this.name = messageFromParent;
        this.date = new Date();
    }


    handleChange(Event){
        this.name = Event.target.value;
    }
    handleclickEvent(){
        const clickEvent = new CustomEvent("simple", 
        { 
            bubbles : true,
            composed : false

        });
        this.dispatchEvent(clickEvent);
    }
}