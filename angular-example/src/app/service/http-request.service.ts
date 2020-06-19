import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Post } from '../data/post.model';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  private readonly URL = "https://jsonplaceholder.typicode.com/posts";
  
  constructor(private http: HttpClient) { }

  getPost() : Observable<Post[]>{
    return this.http.get<Post[]>(this.URL).pipe(take(1));
  }

}
