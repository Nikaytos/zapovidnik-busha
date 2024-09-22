import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() imageSrc: string | null = null;
  @Input() caption: string | null = null;
  @Input() isModalOpen = false;
  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal(): void {
    this.closeModalEvent.emit();
  }
}
