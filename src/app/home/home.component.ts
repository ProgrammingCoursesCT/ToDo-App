import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  toDos = ["clean your room", "take out the trash", "cure cancer", "save the world"]
  length = 0;
  value = "";
  @ViewChild("input") input = null;

  constructor() {
    this.updateLength();
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.setFocus();
  }

  updateLength() {
    this.length = this.toDos.length;
  }

  onClose(index) {
    this.toDos.splice(index, 1);
    this.updateLength();
  }

  onInputKeyUp(event) {
    if (event.keyCode !== 13) {
      return;
    }
    this.onSubmit();
  }

  onSubmit() {
    this.setFocus();
    if (this.value === "") {
      return;
    }
    this.toDos.unshift(this.value);
    this.value = "";
    this.updateLength();
  }

  setFocus() {
    this.input && this.input.nativeElement && this.input.nativeElement.focus && this.input.nativeElement.focus();
  }

}
