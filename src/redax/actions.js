import { nanoid } from 'nanoid';
import {
  ADD_CONTACT,
  FILTER_CHANGED,
  REMOVE_CONTACT,
  SET_LOCAL_CONTACTS,
} from './constans';

export const addContact = user => {
  return {
    type: ADD_CONTACT,
    payload: { id: nanoid(), ...user },
  };
};
export const removeContact = id => {
  return {
    type: REMOVE_CONTACT,
    payload: id,
  };
};
export const setLocalContacts = contacts => {
  return {
    type: SET_LOCAL_CONTACTS,
    payload: contacts,
  };
};
export const filterChanged = value => {
  return {
    type: FILTER_CHANGED,
    payload: value,
  };
};
