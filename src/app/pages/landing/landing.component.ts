import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GitHubService } from 'src/app/services/git-hub.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  // tslint:disable-next-line: no-output-native
  @Output() scrollToContact: EventEmitter<any> = new EventEmitter();


  constructor( private githubService: GitHubService) { }

  ngOnInit(): void {
    this.getTkn();
  }

  scrollTocontact() {
      this.scrollToContact.emit(null);
  }

  getTkn() {
    this.githubService.getAccess().subscribe(resp => {
      const extractTKN: any = Object.values(resp);
      localStorage.setItem('token', extractTKN);
    });
  }

}
