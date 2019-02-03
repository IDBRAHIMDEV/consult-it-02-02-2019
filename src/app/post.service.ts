import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  persistPost(post) {
   return this.http.post('https://jsonplaceholder.typicode.com/posts', post)
  }

  updatePost(post) {
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post);
  }

}
