import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  toDos = [];
  length = 0;
  inputValue = "";
  @ViewChild("input") input = null;

  constructor(private _data: DataService) {
    this.updateLength();
  }

  ngOnInit() {
    this.updateLength();
    this._data.toDos.subscribe(res => this.toDos = res);
    this._data.updateToDos(this.toDos);
  }

  ngAfterViewInit() {
    this.setFocus();
  }

  updateLength() {
    this.length = this.toDos.length;
  }

  onClose(index) {
    this.toDos.splice(index, 1);
    this.updateLength();
    this._data.updateToDos(this.toDos);
  }

  onInputKeyUp(event) {
    if (event.keyCode !== 13) {
      return;
    }
    this.onSubmit();
  }

  onSubmit() {
    this.setFocus();
    if (this.inputValue === "") {
      return;
    }
    this.toDos.unshift(this.inputValue);
    this.inputValue = "";
    this.updateLength();
    this._data.updateToDos(this.toDos);
  }

  setFocus() {
    this.input && this.input.nativeElement && this.input.nativeElement.focus && this.input.nativeElement.focus();
  }

}
