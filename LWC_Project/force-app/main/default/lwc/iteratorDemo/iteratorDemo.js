import { LightningElement } from 'lwc';

export default class IteratorDemo extends LightningElement {
    contacts = [
        {
            id: 1,
            name: 'Amit Singh',
            email: 'sfdcpanther@gmail.com'  
        },
        {
            id: 2,
            name: 'Anuj Singh',
            email: 'anuj@outlook.com'
        },
        {
            id: 3,
            name: 'Ankit Singh',
            email: 'ankit@hotmail.com'
        }
    ];
}