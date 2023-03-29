import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {

    handleChildEvent(event){
        console.log('message is '+event.target.message);
        console.log('pageno is '+event.target.pageno);
        console.log('Name is '+event.target.name);
        alert('I am inside parent component. handling child event');
    }

    handleClick(){
        this.template.querySelector('c-child-comp').childMethod('After API Function', 30);
    }
}