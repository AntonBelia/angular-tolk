import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comment } from '../../../data/interfaces/post.interface';
import { ImgUrlPipe } from '../../../helpers/pipes/img-url.pipe';
import { PostInputComponent } from "../post-input/post-input.component";
import { Profile } from '../../../data/interfaces/profile.interface';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, ImgUrlPipe, PostInputComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() comments: Comment[] = [];
  @Input() post: any;
  @Input() profile?: Profile;

  constructor() {
  }
}
