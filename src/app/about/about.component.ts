import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, EffectFade } from 'swiper/core';

// install Swiper components
SwiperCore.use([Navigation, EffectFade]);
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
