import { Component, OnInit } from '@angular/core';
import { ToolboxItemService } from '../../services/toolboxItem.service';
import { ToolboxItem } from 'src/app/models/toolboxItem';
import { GitHubService } from '../../services/git-hub.service';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {

  constructor(private toolboxitemService: ToolboxItemService, private githubService: GitHubService, private router: Router) { }
  toolboxItems: ToolboxItem[] = [];
  githubEvents = [];
  repos: number;
  gists: number;
  displayedColumns = ['EVENT TYPE', 'REPOSITORY', 'TIME'];
  dataSource = new MatTableDataSource<any>(this.githubEvents);

  ngOnInit(): void {
    this.toolboxitemService.getToolboxItems().subscribe(
      response => {
        this.toolboxItems = response;
      }
    );

    this.githubService.getEvents().subscribe(
      response => {
        this.githubEvents = response;
        this.dataSource.data = response.slice(0, 5);
      }
    );

    this.githubService.getProfile().subscribe(
      response => {
        const profile = response;
        // tslint:disable-next-line: no-string-literal
        this.repos = profile['public_repos'];
        // tslint:disable-next-line: no-string-literal
        this.gists = profile['public_gists'];
      }
    );
  }
}



