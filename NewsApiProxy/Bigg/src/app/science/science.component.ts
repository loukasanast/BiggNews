import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  news: object;
  baseUrl: string = './api/news/science' + '?r=' + Math.random();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.baseUrl).subscribe((data: any) => {
      this.news = data.articles;
    });
  }

}
