import {Component, OnInit} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Post} from '../../models/post.model';
import {ActivatedRoute} from '@angular/router';
import {PostListItemComponent} from '../post-list-item/post-list-item.component';
import {AsyncPipe, NgForOf} from '@angular/common';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    PostListItemComponent,
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {

  posts$!: Observable<Post[]>;

  constructor(private route: ActivatedRoute,
              private postService: PostsService) {}

  ngOnInit(): void {
    this.posts$ = this.route.data.pipe(
      map(data => data['posts'])
    );
  }

  onPostCommented($event: { comment: string; postId: number }) {
    this.postService.addNewComment($event);
  }
}
