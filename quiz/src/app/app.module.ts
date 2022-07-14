import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuizBoardComponent } from './quiz-board/quiz-board.component';
import { RulesComponent } from './rules/rules.component';
import { LoginComponent } from './login/login.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { VisitedDirective } from './visited.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizBoardComponent,
    RulesComponent,
    LoginComponent,
    AddQuestionsComponent,
    VisitedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
