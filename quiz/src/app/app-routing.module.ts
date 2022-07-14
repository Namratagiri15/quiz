import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeactivateGuard } from './deactivate.guard';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { QuizBoardComponent } from './quiz-board/quiz-board.component';
import { ReloadGuard } from './reload.guard';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch:"full"},
  {path: 'home', canActivateChild: [LoginGuard], 
    children: [
      {path: '', component: HomeComponent},
      {path: ':id', component: QuizBoardComponent, resolve: { questionObj: ReloadGuard}},
    ]
  },
  {path: 'rules', component: RulesComponent, canDeactivate: [DeactivateGuard]},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
