import { Component, OnInit } from '@angular/core';
import { ExamsServiceService } from '../../services/exams-service.service';
import { Exam } from '../../Exam';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css']
})
export class CreateQuestionsComponent implements OnInit {

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

  currentQuestion = 0

  ngOnInit(): void {
    this.examsService.currentExamObs.subscribe(exam => this.currentExam = exam);
    console.log(this.currentExam)
  }


  submitExam(){
    this.examsService.getExams().subscribe((examsObj:any) => {
      let keysArray:any = Object.keys(examsObj)
      for(var i = 0; i< keysArray.length ;i++){
        if(examsObj[keysArray[i]].timestamp == this.currentExam.timestamp){
          for(var j = 0; j < this.questions.length; j++){
            console.log()
            this.questions[j].timestamp = this.currentExam.timestamp
            this.examsService.postQuestion(this.questions[j]).subscribe((res) => {console.log(res)})
          }
          this.router.navigate(['/examslist']);
        }  
      }
      
    });
  }

  submitQuestion(){
    let tempQuestion = { ...this.question };
    this.questions.push(tempQuestion)
    this. question = {
      question:'',
      answer:'',
      choice1:'',
      choice2:'',
      choice3:'',
      choice4:'',
    }
    console.log(this.questions)
  }


}
