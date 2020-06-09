import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  public getContacts(): Observable<any> {
    return this.httpClient.get('https://my.api.mockaroo.com/contacts.json?key=0821c160');
  }
}
