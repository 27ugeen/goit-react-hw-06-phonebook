import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contactsActions';

const deleteContact = (state, { payload }) =>
  state.filter(({ id }) => id !== payload);

const addContact = (state, { payload }) => [...state, payload.contact];

const items = createReducer([], {
  [contactsActions.addContact]: addContact,
  [contactsActions.deleteContact]: deleteContact,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
