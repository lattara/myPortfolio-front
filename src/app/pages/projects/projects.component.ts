import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from 'src/app/models/project.model';
import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  constructor(
    private projectsService: ProjectsService,
    private http: HttpClient) { }
  projects: Project[] = [];
  indexes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  project: any;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAllProjectsWithToolbox();
    console.log('this projects are', this.projects);
  }

  public getAllProjectsWithToolbox() {
    for (let i = 1; i < 8; i++) {
      const $project = this.http.get(`http://localhost:3000/api/projects/${i}`);
      const $toolbox = this.http.get(`http://localhost:3000/api/toolbox/${i}`);
      forkJoin([$project, $toolbox]).subscribe(results => {
        this.project = results[0];
        if (Object.keys(this.project).length === 0) {
          delete this.project.toolbox;
        } else {
          this.project.toolbox = Object.entries(results[1]).map(e => e[1]);
          this.projects.push(this.project);
        }
      }
      );
    }
  }
}
