import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.page.html',
  styleUrls: ['./blogpost.page.scss'],
})
export class BlogpostPage implements OnInit {
  public id: number;
  
  postContents: any = undefined;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.dataService.getBlogPost(this.id).subscribe(postContents => {
      this.postContents = postContents; 

      this.dataService.getAuthor(this.postContents.author).subscribe(authorData => {
        this.postContents.author = authorData;
      });
    });


  }

  visitOriginalPost() {
    window.open(this.postContents.link);
  }

  closePost() {
    window.history.back();
  }

}
