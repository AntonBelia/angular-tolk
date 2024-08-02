import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output } from '@angular/core';
import 'emoji-picker-element';

@Component({
  selector: 'app-emoji-picker',
  template: `<emoji-picker (emoji-click)="handleEmojiClick($event)"></emoji-picker>`,
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['./emoji-picker.component.scss']
})
export class EmojiPickerComponent {
  @Output() emojiSelected = new EventEmitter<string>();

  handleEmojiClick(event: any) {
    this.emojiSelected.emit(event.detail.unicode);
  }
}
