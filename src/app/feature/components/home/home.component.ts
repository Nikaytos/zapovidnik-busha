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
    {img: "img/img1.png", caption: 'Image 1'},
    {img: "img/img1.png", caption: 'Image 2'},
    {img: "img/img1.png", caption: 'Image 3'},
    {img: "img/img1.png", caption: 'Image 4'},
    {img: "img/img1.png", caption: 'Image 5'},
    {img: "img/img1.png", caption: 'Image 6'},
    {img: "img/img1.png", caption: 'Image 7'}
  ]

  slideConfig = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
