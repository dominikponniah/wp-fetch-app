import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  blogPosts;

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchBlogPosts();
  }

  fetchBlogPosts() {
    this.dataService.getBlogPosts().subscribe(subscription => {

      this.blogPosts = subscription;

      this.blogPosts.forEach(subscriptionItem => {
        this.dataService.getAuthor(subscriptionItem.author).subscribe(authorData => {
          subscriptionItem.author = authorData;
        });
      });
    });
  }

  readMore(blogPost) {
    this.router.navigate(['/blogpost/' + blogPost.id ]);
  }
}