import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LayoutService} from "../../services/layout.service";
import {NgForOf, NgIf} from "@angular/common";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NgForOf,
    MatProgressSpinner,
    NgIf
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  layoutService: LayoutService = inject(LayoutService);

  pageId = '';
  title = '';
  text: string[] = [];
  img = '';
  loading = true;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pageId = params['id'];

      this.clearPageData();
      this.loading = true;

      this.layoutService.getPageData(this.pageId).subscribe(pageData => {
        if (pageData) {
          this.title = pageData.title;
          this.text = pageData.text;
          this.img = pageData.img;
        }

        this.loading = false;
      });
    });
  }

  clearPageData(): void {
    this.title = '';
    this.text = [];
    this.img = '';
  }
}
