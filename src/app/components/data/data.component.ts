import { Component, OnInit } from '@angular/core';
import { createSelector, select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { IAppState } from '../../store';
import { IApp } from '../title/title.reducer';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  title$: Observable<string>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.title$ = this.store.pipe(select(selectTitle));
  }
}

export const selectTitle = createSelector(
  (state: IAppState) => state.AppState,
  (state: IApp) => state.title,
);
