import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public title : string = '';
  constructor(public router : ActivatedRoute  ) { }

  ngOnInit(): void {
    this.router.data.subscribe(event => {
        this.title = event.title; 
    });

    this.router.url.subscribe(() => {
      this.title = this.router.snapshot.firstChild?.data.title;
     });
  }

}
