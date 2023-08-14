import React, { useEffect } from 'react';
import { Section } from './Section/Section';
import { SimpleForm } from './Form/SimpleForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Container, GeneralTitle } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setLocalContacts } from 'redax/actions';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem('PhoneBookContacts'));
    if (localContacts) {
      dispatch(setLocalContacts(localContacts));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('PhoneBookContacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <GeneralTitle>Phonebook</GeneralTitle>
      <Section>
        <SimpleForm />
      </Section>

      <Section title="Find contacts by name">
        <Filter />
      </Section>

      <Section title="Contacts">
        <ContactsList />
      </Section>
    </Container>
  );
};
