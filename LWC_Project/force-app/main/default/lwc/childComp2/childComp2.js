import { LightningElement, api } from 'lwc';

export default class ChildComp2 extends LightningElement {
    @api name;


    handleChange(Event){
        this.name = Event.target.value;
    }
    handleclickEvent(){
        const clickEvent = new CustomEvent("simple", 
        { 
            detail: 
            {childname: this.name}
        });
        this.dispatchEvent(clickEvent);
    }
}