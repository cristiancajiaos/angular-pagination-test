import { Post } from './../interfaces/post';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  currentPage = 1;
  
  constructor(
    private post: PostService
  ) { }

  ngOnInit() {
    this.post.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
