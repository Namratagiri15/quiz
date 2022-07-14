import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  questions: Question[] = [];
  question_id!: number;
  constructor(private _questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.questions = this._questionsService.getData(); 
  }

  ItemClicked(id: number) {
    this._questionsService.markVisited(id)
  }
}
