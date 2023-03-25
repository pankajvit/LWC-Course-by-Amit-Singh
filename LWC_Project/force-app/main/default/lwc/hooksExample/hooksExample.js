import { LightningElement } from 'lwc';

export default class HooksExample extends LightningElement {

    name = 'Amit ';
    constructor(){
        super();
        console.log('inside constructor');
        this.name = this.name + 'Singh'; 
    }

    connectedCallback(){
        console.log('inside connectedCallback');
    }

    disconnectedCallback(){
        console.log('inside disconnectedCallback');
    }

    renderedCallback(){
        console.log('inside renderedCallback');
    }

    /*
    render(){

    }*/

    errorCallback(error, stack){
        console.error(error);
    }
}