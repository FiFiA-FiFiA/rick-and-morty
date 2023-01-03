import { Component, ViewEncapsulation } from '@angular/core';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-main-swiper',
  templateUrl: './main-swiper.component.html',
  styleUrls: ['./main-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainSwiperComponent {
  ngOnInit(): void {
    let swiper: any = new Swiper(".Main__Swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
    });
  }
}
