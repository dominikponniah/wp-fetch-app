import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getBlogPosts(): Observable<any> {
    return this.httpClient.get('https://kirche-unterseen.ch/wp-json/wp/v2/posts?per_page=20');
  }

  getBlogPost(postID: number): Observable<any> {
    return this.httpClient.get('https://kirche-unterseen.ch/wp-json/wp/v2/posts/' + postID);
  }

  getAuthor(userID: number): Observable<any> {
    return this.httpClient.get('https://www.kirche-unterseen.ch/wp-json/wp/v2/users/' + userID);
  }

  getEvents() {
    return this.httpClient.get('https://kirche-unterseen.ch/wp-json/tribe/events/v1/events');
  }
}
