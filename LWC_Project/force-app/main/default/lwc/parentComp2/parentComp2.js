import { LightningElement } from 'lwc';

export default class ParentComp2 extends LightningElement {
    childName;

    handleCustomEvent(Event){
        this.childName = Event.detail.childname;
        alert('handling the click event of child in parent');
    }
}