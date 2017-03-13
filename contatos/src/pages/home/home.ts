import { Component } from '@angular/core';

import { Contacts, ContactFieldType, ContactFindOptions } from 'ionic-native';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contactsfound = [];
    search = false;

    constructor(public navCtrl: NavController) {
    }


    findContact(ev:any) {
        let fields:ContactFieldType[] = ['displayName'];

        const options = new ContactFindOptions();
        options.filter = ev.target.value;
        options.multiple = true;
        options.hasPhoneNumber = true;

        Contacts.find(fields, options).then((contacts) => {
            this.contactsfound = contacts;
            console.log(JSON.stringify(contacts[0]));
        });

        if(this.contactsfound.length == 0){
            this.contactsfound.push({displayName: 'No Contacts found'});
        }
        this.search = true;
    }

}
