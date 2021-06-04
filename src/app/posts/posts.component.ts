import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 posts: any[];

  constructor(private postServise:PostService) { }

  ngOnInit(): void {
    this.postServise.getPosts().subscribe(value => this.posts=value)
    console.log(this.posts)
  }

}
