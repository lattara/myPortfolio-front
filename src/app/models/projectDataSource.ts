import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';

import { Project } from '../models/project.model';
import { ProjectsService } from '../services/projects.service';


export class ProjectsDataSource extends DataSource<Project> {
    constructor(private projects: Project[]) {
        super();
    }

    connect(): Observable<Project[]> {
        const rows = [];
        this.projects.forEach(project => rows.push(project));
        return of(rows);
    }

    disconnect() { }
}
