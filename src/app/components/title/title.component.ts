import { Component, OnInit } from '@angular/core';

import { TitleService } from './title.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  private count = 0;

  constructor(private service: TitleService) { }

  ngOnInit(): void {
  }

  addTitle(text: string) {
    this.count++;
    const title = text + '-' + this.count;
    this.service.loadData(title);
  }
}
