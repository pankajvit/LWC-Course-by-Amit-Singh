import { LightningElement } from 'lwc';
import { si, add} from 'c/utility';
export default class SharedMisc extends LightningElement {
    constructor(){
        super();
        const s = si(10000, 1, 10);
        console.log('Simple Interest is',s);
    }
}