import { createAction } from '@reduxjs/toolkit';
import { uuid } from 'uuidv4';
// import actionsTypes from './contactsActionsTypes';

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    contact: {
      id: uuid(),
      name,
      number,
    },
  },
}));

const deleteContact = createAction('contacts/delete');

// const deleteContact = contactId => ({
//   type: actionsTypes.DELETE,
//   payload: {
//     contactId,
//   },
// });

const changeFilter = createAction('contacts/changeFilter');

// const changeFilter = filter => ({
//   type: actionsTypes.CHANGE_FILTER,
//   payload: {
//     filter,
//   },
// });

export default { addContact, deleteContact, changeFilter };
