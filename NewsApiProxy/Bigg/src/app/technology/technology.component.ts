import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  news: object;
  baseUrl: string = './api/news/technology' + '?r=' + Math.random();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.baseUrl).subscribe((data: any) => {
      this.news = data.articles;
      console.log(this.news);
    });
  }

}
