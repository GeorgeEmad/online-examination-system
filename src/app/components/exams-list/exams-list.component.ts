import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exams-list',
  templateUrl: './exams-list.component.html',
  styleUrls: ['./exams-list.component.css']
})
export class ExamsListComponent implements OnInit {

  constructor() { }

  exams:any[]= [
    { 
      examName:"Angular Quiz 1",
      Subject: "Human Computer Interaction",
      difficultyLevel: "Easy - MCQ",
      totalQuestions: 5,
      examTime: 15
    },
    { 
      examName:"Angular Quiz 2",
      Subject: "Human Computer Interaction",
      difficultyLevel: "Hard - Short Answer",
      totalQuestions: 5,
      examTime: 10
    },
    { 
      examName:"Creational Patterns",
      Subject: "Software Design Patterns",
      difficultyLevel: "Intermediate - TF",
      totalQuestions: 10,
      examTime: 20
    },
    { 
      examName:"Angular Quiz 1",
      Subject: "Human Computer Interaction",
      difficultyLevel: "Easy - MCQ",
      totalQuestions: 5,
      examTime: 15
    },
    { 
      examName:"Angular Quiz 2",
      Subject: "Human Computer Interaction",
      difficultyLevel: "Hard - Short Answer",
      totalQuestions: 5,
      examTime: 10
    },
    { 
      examName:"Creational Patterns",
      Subject: "Software Design Patterns",
      difficultyLevel: "Intermediate - TF",
      totalQuestions: 10,
      examTime: 20
    }
  ]

  ngOnInit(): void {

  }

}
