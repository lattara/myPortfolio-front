import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';
import { ToolboxItem } from '../models/toolboxItem';

@Injectable({
    providedIn: 'root'
  })
export class ToolboxService {

  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) {
  }

  getToolboxItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}/toolboxItem`);
  }

  deleteFromToolbox(projectId: number, toolboxItemId: number): Observable<any> {
    const url = `${this.baseUrl}/toolbox/${projectId}&${toolboxItemId}`;
    return this.http.delete(url);
  }

  postToolboxItem(projectId: number, toolboxItemId: number): Observable<any> {
    const object = {projectId, toolboxItemId};
    return this.http.post(`${this.baseUrl}/toolbox`, {projectId, toolboxItemId});
  }

  getToolboxItemById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/toolboxItem/${id}`);
  }

  getToolboxItemByProjectId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/toolbox/${id}`);
  }

}