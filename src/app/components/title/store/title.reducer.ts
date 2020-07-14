import {Action, createReducer, on} from '@ngrx/store';
import { setDataAction } from './title.actions';


export interface ITitle {
  title: string;
}

export const initialAppState: ITitle = {
  title: '',
};

export const reducer = createReducer(
  initialAppState as ITitle,
  on(setDataAction, (state, { title }) => ({ ...state, title })),
);

export function AppReducer(state: ITitle, action: Action): ITitle {
  return reducer(state, action) as ITitle;
}
