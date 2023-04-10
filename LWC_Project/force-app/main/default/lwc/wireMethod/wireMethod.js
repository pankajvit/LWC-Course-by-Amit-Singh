import { LightningElement, api, track, wire } from 'lwc';
import getAllCases from '@salesforce/apex/CaseController.getAllCases';
export default class WireMethod extends LightningElement {
    @api records;
    @api errors;
    @track subject;

    handleChange(event){
        const sVal = event.target.value;
        this.subject = sVal;
    }
    /*
        ---> first way to call apex class method which store inside cases variable
        @wire(getAllCases) cases;
        cases - under cases, we get two things
            - data : if we can successful data, we get under data
            - error : if we can any error than we get under error
        --> second way to call apex class Method which returns a promise
        @wire(getAllCases)
            wiredCase({data, error}){
                - data => caseList
                - error => we get error in the form of object
            }
    */
    
    
    //@wire(getAllCases) cases;

    @wire(getAllCases, {
        subject : '$subject'
    })
            wiredCases({data,error}){
                if(data){
                    this.records = data;
                    this.errors = undefined;
                }
                if(error){
                    this.errors = error;
                    this.records = undefined;
                }
            }
}