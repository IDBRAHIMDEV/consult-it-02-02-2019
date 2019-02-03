import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  persistPost(post) {
   return this.http.post(this.url, post)
  }

  updatePost(post) {
    return this.http.put(`${this.url}/${post.id}`, post);
  }

  deletePost(id) {
   return this.http.delete(this.url+'/'+id);
  }

}
