import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, MaybeAsync, Resolve, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {Post} from '../../models/post.model';
import {PostsService} from '../posts.service';
import {Observable} from 'rxjs';

@Injectable()
export class PostsResolverClass implements Resolve<Post[]> {

  constructor(private postsService: PostsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
    return this.postsService.getPosts();
  }
}

export const postsResolver: ResolveFn<Post[]> = (route, state): Observable<Post[]> => {
  const postsService = inject(PostsService);
  return postsService.getPosts();
}
