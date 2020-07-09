import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DataService } from '../../../api/data/data.service';
import { TitleAction } from './title.actions';


@Injectable()
export class TitleEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(TitleAction.loadData),
    mergeMap(() => this.dataService.loadData()
      .pipe(
        map((data: any) => ({ type: TitleAction.setData, title: data.data })),
        catchError(() => EMPTY) // TODO parse errors
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}
}
