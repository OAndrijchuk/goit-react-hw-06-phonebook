import React from 'react';
import { Section } from './Section/Section';
import { SimpleForm } from './Form/SimpleForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Container, GeneralTitle } from './App.styled';

export const App = () => {
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
