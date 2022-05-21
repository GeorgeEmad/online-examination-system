import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ExamsListComponent } from './components/exams-list/exams-list.component';
import { AdminComponent } from './components/admin/admin.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'user examiner admin'
    }
  },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'home', component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'user examiner admin'
    }
  },
  { path: 'examslist', component: ExamsListComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'user admin'
    }
  },
  { path: 'admin', component: AdminComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'admin'
    }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
