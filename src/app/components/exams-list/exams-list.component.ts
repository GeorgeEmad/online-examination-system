import { Component, OnInit } from '@angular/core';
import { ExamsServiceService } from '../../services/exams-service.service';
import { Exam } from '../../Exam';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exams-list',
  templateUrl: './exams-list.component.html',
  styleUrls: ['./exams-list.component.css']
})
export class ExamsListComponent implements OnInit {

  constructor(private examsService: ExamsServiceService, private router: Router) { }
  exams:Exam[]= []
  isLoading:boolean = false
  
  ngOnInit(): void {
    this.isLoading = true
    this.examsService.getExams().subscribe((examsObj:any) => {
      this.isLoading = false
      let keysArray:any = Object.keys(examsObj)
      for(var i = 0; i< keysArray.length ;i++){
        this.exams.push(examsObj[keysArray[i]])
      }
      console.log(this.exams);
    });
  }

  takeExam(exam:any){
    this.examsService.updateCurrentExam(exam);
    this.router.navigate(['/exam']);
  }


}
