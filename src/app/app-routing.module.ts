import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { BioComponent } from './pages/bio/bio.component';
import { MainComponent } from './pages/main/main.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { BioDashboardComponent } from './dashboard/bio-dashboard/bio-dashboard.component';
import { ProjectsDashboardComponent } from './dashboard/projects-dashboard/projects-dashboard.component';
import { MiscDashboardComponent } from './dashboard/misc-dashboard/misc-dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';


const routes: Routes = [
  {path: '', component: MainComponent}, // can be accessed by everyone
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},

  {path: 'dashboard',
  component: AdminDashboardComponent, // can only be accessed if logedin
  canActivate: [AuthGuardGuard],
  children: [
    {path: '', component: ProjectsDashboardComponent},
    {path: 'bio', component: BioDashboardComponent},
    {path: 'misc', component: MiscDashboardComponent},
  ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
