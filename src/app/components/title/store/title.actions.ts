import { createAction, props } from '@ngrx/store';

export enum TitleAction {
  loadData = '[app-title] load data effect',
  setData = '[app-title] set loaded data',
}

// TODO add type <T> for action
const loadData = createAction(
  TitleAction.loadData,
  props<{ title: string }>()
);

const setData = createAction(
  TitleAction.setData,
  props<{ title: string }>()
);

export default {
  loadData,
  setData,
};
