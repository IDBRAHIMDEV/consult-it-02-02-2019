import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  oldPost = null;
  displayForm = false;
  displayOnUpdate = false;
  myPost = {
    title: "",
    body: ""
  }

  posts = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
   this.listPosts();
  }

  listPosts() {
    this.postService.getPosts()
        .subscribe((res: any[]) => {
          this.posts = res
          console.log(this.posts);
        })
  }


  createPost() {
    this.postService.persistPost(this.myPost)
        .subscribe((res) => {
          this.posts.unshift(res);
          this.myPost = {
            title: "",
            body: ""
          }
          this.displayForm = false
        },
        (err) => console.error(err)
      );
  }

  onDisplayForm() {
    this.displayForm = !this.displayForm
  }

  updatePost() {
    this.postService.updatePost(this.myPost)
        .subscribe((res) => {
           this.cancelPost()
        },
        (err) => {
           let index = this.posts.findIndex((post) => post.id == this.oldPost.id)
           this.posts[index] = this.oldPost;
           this.cancelPost()
        })
  }

  editPost(post) {
    this.oldPost = {...post};
    this.myPost = post;
    this.displayOnUpdate = this.displayForm = true;
  }

  cancelPost() {
    this.displayOnUpdate = this.displayForm = false;
    this.myPost = {
      title: "",
      body: ""
    }
  }

}
