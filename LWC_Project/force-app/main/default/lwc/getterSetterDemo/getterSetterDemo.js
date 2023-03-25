import { LightningElement } from 'lwc';

export default class GetterSetterDemo extends LightningElement {

    upperCaseItem = 'Initial Text';
    get itemName(){
        return this.upperCaseItem;
    }

    set itemName(value){
        this.upperCaseItem = value.toUpperCase();
    }

    handleClick(){
        this.itemName = 'After Click';
    }

    connectedCallback(){
        console.log('hello connectedCallback');
    }
    disconnectedCallback(){
        console.log('hello disconnectedCallback');
    }
}