import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { LanguageListComponent } from './language-list/language-list.component';
import { AddNewLanguageComponent } from './add-new-language/add-new-language.component';
import {RouterModule, Routes} from '@angular/router';
import {ContactService} from './services/contact.service';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent
  }
];

@NgModule({
  declarations: [ContactsListComponent, LanguageListComponent, AddNewLanguageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
      MatInputModule
  ],
  providers: [ContactService]
})
export class ContactModule { }
