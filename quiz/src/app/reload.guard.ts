import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Resolve, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Question } from './question';
import { QuestionsService } from './questions.service';

@Injectable({
  providedIn: 'root'
})
export class ReloadGuard implements CanActivate, Resolve<Question> {
  constructor(private _questionService: QuestionsService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {
      let id = route.params['id'];
      let question = this._questionService.getDataById(id);
      if(question) {
        return question
      } else {
        alert("Data not found");
        this.router.navigate(['home'])
        return null;
      }
  }
}
