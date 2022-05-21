import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exam } from '../Exam';

@Injectable({
  providedIn: 'root'
})
export class ExamsServiceService {
  private dbUrl = "https://hci-project-f3637-default-rtdb.firebaseio.com/exams.json";

  constructor(private http: HttpClient) { }

  getExams(): Observable<Object> {
    return this.http.get(this.dbUrl)
  }

  postExams(exams:Exam[]) {
    this.http.post("https://hci-project-f3637-default-rtdb.firebaseio.com/exams.json", exams).subscribe( res => {
      console.log(res)
    })
  }


}
