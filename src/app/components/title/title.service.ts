import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '../../store';
import { loadDataAction } from './store/title.actions';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private store: Store<IAppState>) { }

  public loadData(title) {
    this.store.dispatch(
      loadDataAction({ title })
    );
  }
}
