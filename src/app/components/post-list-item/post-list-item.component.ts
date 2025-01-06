import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../models/post.model';
import {DatePipe, NgIf, TitleCasePipe} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {CommentsComponent} from '../comments/comments.component';
import {ShortenPipe} from '../../pipes/shorten.pipe';
import {TimeAgoPipe} from '../../pipes/time-ago.pipe';
import {HighlightDirective} from '../../directives/highlight.directive';

@Component({
  selector: 'app-post-list-item',
  standalone: true,
  imports: [
    TitleCasePipe,
    MatCardModule,
    DatePipe,
    NgIf,
    CommentsComponent,
    ShortenPipe,
    TimeAgoPipe,
    HighlightDirective
  ],
  templateUrl: './post-list-item.component.html',
  styleUrl: './post-list-item.component.scss'
})
export class PostListItemComponent implements OnInit {

  @Input() post!: Post;
  @Output() postCommented = new EventEmitter<{ comment: string, postId: number}>();

  ngOnInit() {
  }

  onNewComment($event: string) {
    this.postCommented.emit({ comment: $event, postId: this.post.id })
  }
}
