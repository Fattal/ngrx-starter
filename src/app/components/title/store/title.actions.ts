import { createAction, props } from '@ngrx/store';

export enum TitleActionTypes {
  loadData = '[app-title] load data effect',
  setData = '[app-title] set loaded data',
}

// TODO add type <T> for action
export const loadDataAction = createAction(
  TitleActionTypes.loadData,
  props<{ title: string }>()
);

export const setDataAction = createAction(
  TitleActionTypes.setData,
  props<{ title: string }>()
);
