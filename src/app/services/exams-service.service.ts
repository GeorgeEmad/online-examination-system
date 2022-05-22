import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,BehaviorSubject } from 'rxjs';
import { Exam } from '../Exam';
@Injectable({
  providedIn: 'root'
})
export class ExamsServiceService {
  private dbUrl = "https://hci-project-f3637-default-rtdb.firebaseio.com/exams.json";
  examObj:Exam={}
  private currentExam = new BehaviorSubject(this.examObj);
  currentExamObs = this.currentExam.asObservable();

  updateCurrentExam(exam: Exam) {
    this.currentExam.next(exam)
  }


  constructor(private http: HttpClient) { }

  getExams(): Observable<Object> {
    return this.http.get(this.dbUrl)
  }

  createExam(exam:Exam): Observable<Object>{
    return this.http.post("https://hci-project-f3637-default-rtdb.firebaseio.com/exams/.json", exam)
  }

  postQuestion(question:any): Observable<Object>{
    console.log("examservice")
    return this.http.post("https://hci-project-f3637-default-rtdb.firebaseio.com/question/.json", question)
  }

}


