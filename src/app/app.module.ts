import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { AppComponent } from './app.component';
import { AppNavigationBarComponent } from './components/app-navigation-bar/app-navigation-bar.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ExamsListComponent } from './components/exams-list/exams-list.component';
import AuthService from './services/auth-service.service';
import { AdminComponent } from './components/admin/admin.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { CreateExamInfoComponent } from './components/create-exam-info/create-exam-info.component';
import { CreateQuestionsComponent } from './components/create-questions/create-questions.component';
import { ExamComponent } from './components/exam/exam.component'

@NgModule({
  declarations: [
    AppComponent,
    AppNavigationBarComponent,
    RegisterComponent,
    AboutComponent,
    LoginComponent,
    HomeComponent,
    ExamsListComponent,
    AdminComponent,
    UnauthorizedComponent,
    CreateExamInfoComponent,
    CreateQuestionsComponent,
    ExamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
