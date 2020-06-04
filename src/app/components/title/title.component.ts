import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {IAppState} from '../../store';
import {addTitle} from './title.actions';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  count = 0;

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
  }

  addTitle(title) {
    this.count++;
    this.store.dispatch(addTitle({ title: title + '-' + this.count }));
  }
}
