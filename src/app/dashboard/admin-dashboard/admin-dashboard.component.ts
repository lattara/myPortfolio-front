import { Component, OnInit } from '@angular/core';
import { dashboardMenuItems } from './dashboard-menu-items';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})

export class AdminDashboardComponent implements OnInit {

  dashboardMenuItems = dashboardMenuItems;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  logout() {
    this.usersService.logout();
  }


}

