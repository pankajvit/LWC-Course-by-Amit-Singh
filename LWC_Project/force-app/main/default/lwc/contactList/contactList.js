import { LightningElement } from 'lwc';

export default class ContactList extends LightningElement {
    contacts = [
        {
            id: 1,
            name: "Pankaj Kumar",
            email:"pankajvitmca@gmail.com",
            mobileNo: "6200753817"
        },
        {
            id: 2,
            name: "Golu Kumar",
            email:"golu@gmail.com",
            mobileNo: "9999999999"
        },
        {
            id: 3,
            name:"Sneha Kumari",
            email:"sneha@gmail.com",
            mobileNo: "8888888888"
        },
        {
            id: 4,
            name: "Sonu Ray",
            email:"sonu@gmail.com",
            mobileNo: "666666666"
        }
    ];
}