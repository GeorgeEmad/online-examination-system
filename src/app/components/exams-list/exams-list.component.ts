import { Component, OnInit } from '@angular/core';
import { ExamsServiceService } from '../../services/exams-service.service';
import { Exam } from '../../Exam';
@Component({
  selector: 'app-exams-list',
  templateUrl: './exams-list.component.html',
  styleUrls: ['./exams-list.component.css']
})
export class ExamsListComponent implements OnInit {

  constructor(private examsService: ExamsServiceService) { }
  exams:Exam[]= []
  isLoading:boolean = false

  ngOnInit(): void {
    this.isLoading = true
    this.examsService.getExams().subscribe((examsObj:any) => {
      this.isLoading = false
      let keysArray:any = Object.keys(examsObj)
      this.exams = examsObj[keysArray[0]] 
      console.log(this.exams);
    });
  }

}
