import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-language',
  templateUrl: './add-new-language.component.html',
  styleUrls: ['./add-new-language.component.css']
})
export class AddNewLanguageComponent implements OnInit {

  public languageForm: FormGroup;
  constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<AddNewLanguageComponent>) { }

  ngOnInit(): void {
    this.languageForm = this.formBuilder.group({
      id: [this.randomUuidv4()],
      language: ['']
    });
  }

  private randomUuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  public addNew() {
    this.dialogRef.close(this.languageForm.value);
  }

}
