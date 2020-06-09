import { Component, OnInit } from '@angular/core';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  public contactList = [];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    console.log('contact list');
    this.contactService.getContacts().subscribe(value => {
      console.log(value)
      this.contactList = value[0].contacts;
    });
  }

  public addNewLanguage($event) {
    this.contactList[$event.index].languages.push($event.value);
  }

}
