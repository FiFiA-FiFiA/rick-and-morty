import { Component, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, FreeMode, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, FreeMode, A11y, Autoplay]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

}
