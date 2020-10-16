import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';
import { ToolboxItem } from '../models/toolboxItem';

@Injectable({
    providedIn: 'root'
  })
export class ToolboxItemService {

  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) {
  }

  putToolboxItem(toolboxItem: ToolboxItem, id: number): Observable<any> {
    console.log(toolboxItem);
    const putProjectsURL = `${this.baseUrl}/toolboxItem/${id}`;
    console.log(putProjectsURL);
    return this.http.put(putProjectsURL, toolboxItem);
  }

  postToolboxItem(toolboxItem: Project): Observable<any> {
    return this.http.post(`${this.baseUrl}/toolboxItem`, toolboxItem);
  }

  getToolboxItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}/toolboxItem`);
  }

  deleteToolboxItem(id: number): Observable<any> {
    const url = `${this.baseUrl}/toolboxItem/${id}`;
    return this.http.delete(url);
  }

  getToolboxItemById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/toolboxItem/${id}`);
  }

  getToolboxItemByProjectId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/toolbox/${id}`);
  }

}
