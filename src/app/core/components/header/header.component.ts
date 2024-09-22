import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatRipple} from "@angular/material/core";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon,
    MatAnchor,
    RouterLink,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    FlexLayoutModule,
    MatRipple,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  elevation: string = 'mat-elevation-z1';
}
