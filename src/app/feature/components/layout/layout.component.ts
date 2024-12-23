import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LayoutService} from "../../services/layout.service";
import {NgForOf, NgIf} from "@angular/common";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {ModalComponent} from "../../../shared/components/modal/modal.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NgForOf,
    MatProgressSpinner,
    NgIf,
    ModalComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  layoutService: LayoutService = inject(LayoutService);

  pageId = '';
  title = '';
  text: string[] = [];
  lowImg = '';
  highImg = '';
  loading = true;
  isModalOpen = false;
  selectedImage: string | null = null;
  selectedCaption: string | null = null;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pageId = params['id'];

      this.clearPageData();
      this.loading = true;

      this.layoutService.getPageData(this.pageId).subscribe(pageData => {
        if (pageData) {
          this.title = pageData.title;
          this.text = pageData.text;
          this.lowImg = pageData.lowImg;
          this.highImg = pageData.highImg;
        }

        this.loading = false;
      });
    });
  }

  clearPageData(): void {
    this.title = '';
    this.text = [];
    this.lowImg = '';
    this.highImg = '';
  }

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
