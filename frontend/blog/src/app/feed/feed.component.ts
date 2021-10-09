import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPost: Post[] | undefined;
  post: Post = new Post;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPosts()
  }

  findPosts(){
    this.postService.getPosts().subscribe((data: any)=>{
      this.listPost = data;
    })
  }

  createMessage(){
    this.postService.postMessage(this.post).subscribe((data: any)=> {
      this.post = data;
      location.assign('/feed')
    })
  }

  deleteMessage(){
    this.postService.deleteMessage(this.deleteMessage).subscribe((data: any)=>{
      this.deleteMessage = data;
      location.assign('/feed')
    })
  }
}
