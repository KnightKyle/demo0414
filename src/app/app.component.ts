import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { DataService } from "app/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = '';

  constructor(public datasvc: DataService, private http: Http) {
    this.http.get('/api/articles.json')
      .subscribe(res => {
        this.data = res.json();
      })
  }

  changeKeyword(keyword) {
    this.keyword = keyword;
  }

  clearKeyword($event) {
    this.keyword = '';
  }

  data: any;
}
