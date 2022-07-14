import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-quiz-board',
  templateUrl: './quiz-board.component.html',
  styleUrls: ['./quiz-board.component.css']
})
export class QuizBoardComponent implements OnInit, OnDestroy {
  id!: number;
  image: string | undefined = '';
  timer = 20;
  interval: any;

  constructor(private route: ActivatedRoute, private _questionsService: QuestionsService) {
   
  }

  ngOnInit(): void {
    this.route.params.subscribe(
    (param: Params) => {
      this.id = param['id']
    }
    );
    this.getQuizData();
    this.setTimer();
  }

  getQuizData() {
    // this.image = this._questionsService.getDataById(this.id)?.image;
    // Here getDataById was getting called 2, one from here(i.e from component) and another from
    // Resolve guard, as we are storing the data that we get from guard in questionObj
    // We can access the same obj here instead calling service.
    this.image = this.route.snapshot.data['questionObj'].image;
  }

  setTimer() {
    console.log("Time")
    this.interval = setInterval(()=>{
      this.timer = this.timer -1;
      console.log(this.timer);

      if(this.timer == 0) {
        console.log("here");
        this.clearTimer(); 
      }
    }, 1000);
  }

  clearTimer() {
    clearInterval(this.interval);
  }

  ngOnDestroy() {
    this.clearTimer();
  }
}
