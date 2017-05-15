import { ActionReducer, Action } from '@ngrx/store';

import { Author } from '../entities';

export const authorReducer: ActionReducer<Author[]> = (store: Author[] = [], action: Action) => {
  switch (action.type) {
    case 'LOAD_AUTHORS':
      return action.payload;
    default:
      return store;
  }
};
