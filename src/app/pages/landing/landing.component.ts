import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  // tslint:disable-next-line: no-output-native
  @Output() scrollToContact: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {

  }

  scrollTocontact() {
      this.scrollToContact.emit(null);
  }

}
