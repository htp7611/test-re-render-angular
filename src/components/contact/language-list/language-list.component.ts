import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddNewLanguageComponent} from '../add-new-language/add-new-language.component';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.sass']
})
export class LanguageListComponent implements OnInit {
  @Input() public index: any;
  @Input() public languageList: any[];
  @Output() newLanguage = new EventEmitter<any>();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public addNewLanguage() {
    const dialogRef = this.dialog.open(AddNewLanguageComponent, {
      width: '50%',
      height: '50%'
    });
    dialogRef.afterClosed().subscribe(value => this.newLanguage.emit({value, index: this.index}));
  }

}
