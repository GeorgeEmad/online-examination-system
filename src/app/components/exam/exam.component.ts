import { Component, OnInit } from '@angular/core';
import { ExamsServiceService } from '../../services/exams-service.service';
import { Exam } from '../../Exam';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  constructor(private examsService: ExamsServiceService, private router: Router) { }
  
  currentExam:Exam = {}
  
  question:any = {
    question:'',
    answer:'',
    choice1:'',
    choice2:'',
    choice3:'',
    choice4:'',
    examTimestamp:0
  }
  questions:any[] = [] 
  answer:any
  currentQuestion = 0
  result = 0

  ngOnInit(): void {
    this.examsService.currentExamObs.subscribe(exam => this.currentExam = exam);
    console.log(this.currentExam);
    this.examsService.fetchQuestions().subscribe((res:any) => {
      console.log(res);
      let keysArray:any = Object.keys(res)
      for(var i = 0; i< keysArray.length ;i++){
        if(res[keysArray[i]].timestamp == this.currentExam.timestamp){
          this.questions.push(res[keysArray[i]])
        }  
      }
      console.log(this.questions)
    });
  }

  submitExam(){
    console.log(this.result)
    let scoreMessage:string = "Your Score is " + this.result + " out of " +  this.questions.length
    alert(scoreMessage)
  }

  submitQuestion(){
    console.log(this.answer)
    console.log(this.questions[this.currentQuestion].answer)

    if(this.answer == this.questions[this.currentQuestion].answer){
      this.result = this.result +1;
    }
  }




}
