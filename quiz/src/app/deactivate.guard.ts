import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RulesComponent } from './rules/rules.component';

export interface canDeactiveInterface {
  confirmBox();
}

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<canDeactiveInterface> {
  canDeactivate(
    component: canDeactiveInterface,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // return confirm("I hope you have read all the rules, Are you sure you want to leave?");
      return component.confirmBox();
  }
}
