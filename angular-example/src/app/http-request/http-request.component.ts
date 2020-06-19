import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { Post } from '../data/post.model';
import { HttpRequestService } from '../service/http-request.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.scss']
})
export class HttpRequestComponent implements OnInit {

  posts$ : Observable<Post[]>

  time$ : Observable<string>

  constructor(private httpService : HttpRequestService) { }

  ngOnInit() {
    this.time$ = interval(1000)
                  .pipe(
                    map(data => new Date().toISOString())
                  )
  }

  buscar(){
    setTimeout(() => this.posts$ = this.httpService.getPost(), 5000)
  }

}
