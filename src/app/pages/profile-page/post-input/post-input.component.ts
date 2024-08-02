import { Component, inject, Input, input } from '@angular/core';
import { Profile } from '../../../data/interfaces/profile.interface';
import { ImgUrlPipe } from '../../../helpers/pipes/img-url.pipe';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileService } from '../../../data/services/profile.service';
import { SvgIconComponent } from '../../../common-ui/svg-icon/svg-icon.component';
import { EmojiPickerComponent } from '../../../common-ui/emoji-picker/emoji-picker.component';

@Component({
  selector: 'app-post-input',
  standalone: true,
  imports: [ImgUrlPipe, ReactiveFormsModule, SvgIconComponent, EmojiPickerComponent],
  templateUrl: './post-input.component.html',
  styleUrl: './post-input.component.scss'
})
export class PostInputComponent {
  @Input() placeholder: string = '';
  profile = input<Profile>();
  fb = inject(FormBuilder);
  profileService = inject(ProfileService);

  post = this.fb.group({
    content: ['', Validators.required],
  });

  showEmojiPicker = false;

  toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
    console.log('toggle')
  }

  addEmoji(emoji: string) {
    const contentControl = this.post.get('content');
    if (contentControl) {
      contentControl.setValue(contentControl.value + emoji);
      this.showEmojiPicker = false;
    }
  }

  createPost() {

  }

  openEmodji() {}
}
