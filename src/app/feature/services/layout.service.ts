import { Injectable } from '@angular/core';
import {map, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private _dataUrl: string = './data/pagesData.json';
  private cachedPages: any[] | null = null;

  constructor(private http: HttpClient) { }

  getPageData(pageId: string): Observable<any> {
    if (this.cachedPages) {
      const cachedPage = this.cachedPages.find(page => page.id === pageId);
      return of(cachedPage);
    } else {
      return this.http.get<{pages: any[]}>(this._dataUrl).pipe(
        map(response => {
          this.cachedPages = response.pages;
          return this.cachedPages.find(page => page.id === pageId);
        })
      );
    }
  }
}
