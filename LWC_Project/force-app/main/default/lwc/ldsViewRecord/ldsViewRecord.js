import { api, LightningElement } from 'lwc';

export default class LdsViewRecord extends LightningElement {
    @api recordId;
    @api objectApiName;

    handleSubmit(){
        alert('handle submit');
    }

    handleSuccess(){
        alert('handle success');
    }
}