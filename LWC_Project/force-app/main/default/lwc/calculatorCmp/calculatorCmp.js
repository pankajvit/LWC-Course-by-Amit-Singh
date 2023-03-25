import { LightningElement } from 'lwc';

export default class CalculatorCmp extends LightningElement {
    number1;
    number2;

    handleChangeEvent(event){
        const num = event.target.value;
        const fieldName = event.target.name;
        if(fieldName == 'input1'){
            this.number1 = num;
        }else{
            this.number2 = num;
        }
    }

    doSum(){
        const sum = parseInt(this.number1) + parseInt(this.number2);
        alert(sum);
    }

    doSubs(){
        const subs = parseInt(this.number1) - parseInt(this.number2);
        alert(subs);
    }

    doMulti(){
        const multi = parseInt(this.number1) * parseInt(this.number2);
        alert(multi);
    }
    doDiv(){
        const div = parseInt(this.number1) / parseInt(this.number2);
        alert(div);
    }
}