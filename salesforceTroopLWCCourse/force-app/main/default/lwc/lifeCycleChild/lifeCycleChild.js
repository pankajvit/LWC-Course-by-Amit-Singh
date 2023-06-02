import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super();
        console.log("Child constructor called");
    }
    connectedCallback(){
        console.log("Child connectedCallback called");
        window.addEventListener('click',this.handleClick);
    }
    renderedCallback(){
        console.log("Child renderedCallback called");
    }
    disconnectedCallback(){
        alert("Child disconnectedCallback called !!");
        window.removeEventListener('click',this.handleClick);
    }
}