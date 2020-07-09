import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppState } from '../../store';
import selectors from './store/data.selectors';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  title$: Observable<string>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.title$ = this.store.pipe(select(selectors.selectTitle));
  }
}
