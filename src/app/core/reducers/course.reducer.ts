import { ActionReducer, Action } from '@ngrx/store';

import { ICourse } from '../entities';

export const courseReducer: ActionReducer<ICourse[]> = (store: ICourse[] = [], action: Action) => {
  switch (action.type) {
    case 'LOAD_COURSES':
      return action.payload;
    default:
      return store;
  }
};
