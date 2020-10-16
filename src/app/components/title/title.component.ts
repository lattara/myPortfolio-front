import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() mode: 'title' | 'title-white' | 'subtitle' | 'section-subtitle' | 'text' = 'title' ;
  @Input() text = '';

  constructor() { }

  ngOnInit(): void {
  }

}
