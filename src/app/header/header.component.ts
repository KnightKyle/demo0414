import { DataService } from '../data.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public datasvc: DataService) {
  }

  ngOnInit() {
  }

  counter = 0;

  changeTitle(evt: MouseEvent) {
    this.datasvc.title = 'The Will Will Web';
    console.log(evt);
    console.log(evt.clientX);

    this.counter++;
  }

  is_h3_highlight = false;

}
