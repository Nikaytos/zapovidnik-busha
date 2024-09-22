import { Routes } from '@angular/router';
import {HomeComponent} from "./feature/components/home/home.component";
import {LayoutComponent} from "./feature/components/layout/layout.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page/:id', component: LayoutComponent },
];
