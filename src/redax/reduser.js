import { combineReducers } from 'redux';
import {
  ADD_CONTACT,
  FILTER_CHANGED,
  REMOVE_CONTACT,
  SET_LOCAL_CONTACTS,
} from './constans';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const contactsReduser = (state = initialState.contacts, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case REMOVE_CONTACT:
      return state.filter(contact => contact.id !== action.payload);
    case SET_LOCAL_CONTACTS:
      return action.payload;

    default:
      return state;
  }
};
export const filterReduser = (state = initialState.filter, action) => {
  switch (action.type) {
    case FILTER_CHANGED:
      return action.payload;

    default:
      return state;
  }
};
export const rootReduser = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
});
