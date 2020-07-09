import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '../../store';
import actions from './store/title.actions';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  private count = 0;

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
  }

  addTitle(title) {
    this.count++;
    this.store.dispatch(
      actions.loadData({ title: title + '-' + this.count })
    );
  }
}
