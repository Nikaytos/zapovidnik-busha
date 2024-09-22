import { Component } from '@angular/core';
import {SlickCarouselModule} from "ngx-slick-carousel";
import {NgClass, NgForOf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {ModalComponent} from "../../../shared/components/modal/modal.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SlickCarouselModule,
    NgForOf,
    NgClass,
    MatIcon,
    ModalComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  slides = [
    {lowImg: "img/lowImg1.webp", caption: 'Орел на скелі'},
    {lowImg: "img/lowImg3.webp", caption: 'А.Микитюк. Тарас Завісний'},
    {lowImg: "img/lowImg4.webp", caption: 'М.Худолій. Оберіг часу'},
    {lowImg: "img/lowImg9.webp", caption: 'А.Микитюк. Кобзар'},
    {lowImg: "img/lowImg2.webp", caption: 'Скельний храм'},
    {lowImg: "img/lowImg6.webp", caption: 'Хрест на середньовічному кладовищі'},
    {lowImg: "img/lowImg5.webp", caption: 'Оборонна фортеця'},
  ]

  collage = [
    {lowImg: "img/lowImg1.webp", highImg: "img/highImg1.webp", caption: 'Орел на скелі'},
    {lowImg: "img/lowImg9.webp", highImg: "img/highImg9.webp", caption: 'А.Микитюк. Кобзар'},
    {lowImg: "img/lowImg4.webp", highImg: "img/highImg4.webp", caption: 'М.Худолій. Оберіг часу'},
    {lowImg: "img/lowImg3.webp", highImg: "img/highImg3.webp", caption: 'А.Микитюк. Тарас Завісний'},
    {lowImg: "img/lowImg5.webp", highImg: "img/highImg5.webp", caption: 'Оборонна фортеця'},
    {lowImg: "img/lowImg6.webp", highImg: "img/highImg6.webp", caption: 'Хрест на середньовічному кладовищі'},
    {lowImg: "img/lowImg7.webp", highImg: "img/highImg7.webp", caption: 'Музей "Подільська хата"'},
    {lowImg: "img/lowImg8.webp", highImg: "img/highImg8.webp", caption: 'Гайдамацький яр'},
    {lowImg: "img/lowImg2.webp", highImg: "img/highImg2.webp", caption: 'Скельний храм'}
  ]

  slideConfig = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    swipeToSlide: true,
    lazyLoad: "ondemand",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1609,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1064,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 718,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  }

  isModalOpen = false;
  selectedImage: string | null = null;
  selectedCaption: string | null = null;

  openModal(image: string, caption: string): void {
    this.selectedImage = image;
    this.selectedCaption = caption;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedImage = null;
    this.selectedCaption = null;
  }
}
