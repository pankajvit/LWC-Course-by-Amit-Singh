import { LightningElement } from 'lwc';

export default class ParentComp2 extends LightningElement {
    childName;

    handleCustomEvent(Event){
        this.childName = Event.target.name;
        alert('handling the click event of child in parent');
    }

    handleClick(){
        this.template.querySelector('c-child-comp2').childMethod("message from parent");
    }
}