import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private new_questions = [];
  private questions = [
    {id: 1, visited: false, image: 'assets/img/q1.jpg'},
    {id: 2, visited: false, image: 'assets/img/q2.jpg'},
    {id: 3, visited: false, image: 'assets/img/q3.jpg'},
    {id: 4, visited: false, image: 'assets/img/q4.jpg'},
    {id: 5, visited: false, image: 'assets/img/q5.jpg'},
    {id: 6, visited: false, image: 'assets/img/q6.jpg'},
    {id: 7, visited: false, image: 'assets/img/q7.jpg'},
    {id: 8, visited: false, image: 'assets/img/q8.jpg'},
    {id: 9, visited: false, image: 'assets/img/q9.jpg'},
    {id: 10, visited: false, image: 'assets/img/q10.jpg'},
    {id: 11, visited: false, image: 'assets/img/q11.jpg'},
    {id: 12, visited: false, image: 'assets/img/q12.jpg'},
    {id: 13, visited: false, image: 'assets/img/q13.jpg'},
    {id: 14, visited: false, image: 'assets/img/q14.jpg'},
    {id: 15, visited: false, image: 'assets/img/q15.jpg'},
    {id: 16, visited: false, image: 'assets/img/q16.jpg'},
    {id: 17, visited: false, image: 'assets/img/q17.jpg'},
    {id: 18, visited: false, image: 'assets/img/q18.jpg'},
    {id: 19, visited: false, image: 'assets/img/q19.jpg'},
    {id: 20, visited: false, image: 'assets/img/q20.jpg'},
    {id: 21, visited: false, image: 'assets/img/q21.jpg'},
    {id: 22, visited: false, image: 'assets/img/q22.jpg'},
    {id: 23, visited: false, image: 'assets/img/q23.jpg'},
    {id: 24, visited: false, image: 'assets/img/q24.jpg'},
    {id: 25, visited: false, image: 'assets/img/q25.jpg'},
    {id: 26, visited: false, image: 'assets/img/q26.jpg'},
    {id: 27, visited: false, image: 'assets/img/q27.jpg'},
    {id: 28, visited: false, image: 'assets/img/q28.jpg'},
    {id: 29, visited: false, image: 'assets/img/q29.jpg'},
    {id: 30, visited: false, image: 'assets/img/q30.jpg'},
    {id: 31, visited: false, image: 'assets/img/q31.jpg'},
    {id: 32, visited: false, image: 'assets/img/q32.jpg'},
    {id: 33, visited: false, image: 'assets/img/q33.jpg'},
    {id: 34, visited: false, image: 'assets/img/q34.jpg'},
  ] 

  constructor() { }

  getData() {
    console.log("get all called");
    this.new_questions = this.questions.concat( {id: 35, visited: false, image: 'assets/img/q3.jpg'})
    return this.new_questions;
  }

  getDataById(id: number) {
    console.log("get by id called");
    return this.questions.find(q => q.id == id);
  }

  markVisited(id: number) {
    let el = this.new_questions.find(q => q.id == id);
    el.visited = true;
    this.new_questions[id - 1] = el;
  }
}
