import {Routes} from '@angular/router';
import {postsResolver} from './services/resolvers/posts-resolver.service';
import {PostListComponent} from './components/post-list/post-list.component';

export const routes: Routes = [
  { path: 'social-media', component: PostListComponent, resolve: { posts: postsResolver } },
  { path: '**', redirectTo: 'social-media' }
];
