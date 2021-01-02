import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentOpen: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  
  openDetail(n: number): void {
    if (this.currentOpen === n) this.currentOpen = 0;
    else this.currentOpen = n;
  }

}
/*$(() => {
    $('.qustios__item-title').on('click', function () {
      $('.questions__item').removeClass('questions__item--active');
      $('this').parent().addClass('questions__item--active');
    });
  });*/
