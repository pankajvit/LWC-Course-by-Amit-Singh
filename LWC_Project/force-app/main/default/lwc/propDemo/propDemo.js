import { api, LightningElement } from 'lwc';

export default class PropDemo extends LightningElement {
    message = 'Non-Reactive Property';

    @api message1 = 'Reactive Property using @api decorators';

    handleChange(){
        this.message = 'Changed to Reactive Property';
    }

}