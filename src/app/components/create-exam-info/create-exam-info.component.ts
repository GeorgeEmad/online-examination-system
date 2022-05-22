import { Component, OnInit } from '@angular/core';
import { ExamsServiceService } from '../../services/exams-service.service';
import { Exam } from '../../Exam';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-exam-info',
  templateUrl: './create-exam-info.component.html',
  styleUrls: ['./create-exam-info.component.css']
})
export class CreateExamInfoComponent implements OnInit {
  createExamForm = new FormGroup({
    examName: new FormControl('',[Validators.required,Validators.minLength(2)]),
    Subject: new FormControl('',[Validators.required,Validators.minLength(2)]),
    totalQuestions: new FormControl('',[Validators.required]),
    examTime: new FormControl('',[Validators.required])
  })



  exam:Exam ={ 
    examName: '',
    Subject: '',
    difficultyLevel: '',
    type: '',
    totalQuestions: 0,
    examTime: 0
  }

  constructor(private examsService: ExamsServiceService) { }

  examInfoSubmit(){
    this.exam.examName = this.createExamForm.controls['examName'].value
    this.exam.Subject = this.createExamForm.controls['Subject'].value
    this.exam.examName = this.createExamForm.controls['examName'].value
    this.exam.totalQuestions = this.createExamForm.controls['totalQuestions'].value
    this.exam.examTime = this.createExamForm.controls['examTime'].value
    console.log(this.exam)
    // this.authService.register(this.user)

  }

  ngOnInit(): void {
  }

}
