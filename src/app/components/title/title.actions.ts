import { createAction, props } from '@ngrx/store';

export const addTitle = createAction(
  '[app-title] add title action',
  props<{ title: string }>()
);
