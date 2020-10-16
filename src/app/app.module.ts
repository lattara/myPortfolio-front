import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { TitleComponent } from './components/title/title.component';
import { BioComponent } from './pages/bio/bio.component';
import { MainComponent } from './pages/main/main.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ToolboxComponent } from './pages/toolbox/toolbox.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ContactComponent } from './pages/contact/contact.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { ProjectsDashboardComponent } from './dashboard/projects-dashboard/projects-dashboard.component';
import { BioDashboardComponent } from './dashboard/bio-dashboard/bio-dashboard.component';
import { MiscDashboardComponent } from './dashboard/misc-dashboard/misc-dashboard.component';
import { MatTableModule } from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { UsersService } from './services/users.service';
import { TokenInterceptorService} from './services/token-interceptor.service';
import {MatTooltipModule} from '@angular/material/tooltip';



// Angular material imports
// ***

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FooterComponent,
    LandingComponent,
    TitleComponent,
    BioComponent,
    MainComponent,
    ProjectsComponent,
    ToolboxComponent,
    ContactComponent,
    AdminDashboardComponent,
    ProjectsDashboardComponent,
    BioDashboardComponent,
    MiscDashboardComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    CdkTableModule,
    MatCheckboxModule,
    FormsModule,
    MatTooltipModule
  ],
  providers: [AuthGuardGuard, UsersService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
