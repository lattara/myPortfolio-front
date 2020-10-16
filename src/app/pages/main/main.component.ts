import { Component, OnInit, Renderer2 } from '@angular/core';
import { GitHubService } from 'src/app/services/git-hub.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  constructor( private githubService: GitHubService, private router: Router, private renderer: Renderer2) { }

  tagFragment: string;

  ngOnInit(): void {
    this.githubService.getAccess().subscribe(resp => {
      const extractTKN: any = Object.values(resp)[0];
      localStorage.setItem('token', extractTKN);
      this.router.navigateByUrl('');
    });
  }

  scrollToContact(){
    this.tagFragment = 'app-contact';
    const element = this.renderer.selectRootElement(`${this.tagFragment}`, true);
    element.scrollIntoView({ behavior: 'smooth' });
  }

}
