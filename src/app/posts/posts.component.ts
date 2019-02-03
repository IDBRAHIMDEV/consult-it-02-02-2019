import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

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

  removePost(id, index) {
    
    Swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'error',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

           this.postService.deletePost(id)
            .subscribe((res) => {
              this.posts.splice(index, 1)
            })

        Swal({
          title: 'Deleted',
          text: 'this post is deleted !!',
          type: 'success',
          timer: 3000
        })
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } 
     
    })
    



    // if(confirm('Are you sure to delete post ?')) {
    //   this.postService.deletePost(id)
    //      .subscribe((res) => {
    //        this.posts.splice(index, 1)
    //      })
    // }

     
  }

}
