import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  currentOpen: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  openDetail(n: number): void {
    if (this.currentOpen === n) this.currentOpen = 0;
    else this.currentOpen = n;
  }
}
