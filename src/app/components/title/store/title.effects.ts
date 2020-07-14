import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DataService, LoadedData } from '../../../api/data/data.service';
import { TitleActionTypes } from './title.actions';


@Injectable()
export class TitleEffects {

  loadData = createEffect(() => this.actions.pipe(
    ofType(TitleActionTypes.loadData),
    mergeMap(() => this.dataService.loadData()
      .pipe(
        map((data: LoadedData) => ({ type: TitleActionTypes.setData, title: data.title })),
        catchError(() => EMPTY) // TODO parse errors
      ))
    )
  );

  constructor(
    private actions: Actions,
    private dataService: DataService
  ) {}
}
