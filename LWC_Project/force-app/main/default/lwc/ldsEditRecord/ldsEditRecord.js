import { api, LightningElement } from 'lwc';

export default class LdsEditRecord extends LightningElement {
    @api recordId;
    @api objectApiName;


    handleSubmit(){
        alert('handled submit');
    }
    handleSuccess(){
        alert('handled success');
    }
    handleError(){
        alert('handling error');
    }
}