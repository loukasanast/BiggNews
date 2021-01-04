import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  news: object;
  baseUrl: string = './api/news/entertainment' + '?r=' + Math.random();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.baseUrl).subscribe((data: any) => {
      this.news = data.articles;
    });
  }

}
