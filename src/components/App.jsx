import React, { useEffect, useState } from 'react';
import { Section } from './Section/Section';
import { SimpleForm } from './Form/SimpleForm';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Container, GeneralTitle } from './App.styled';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem('PhoneBookContacts'));
    if (localContacts) {
      setContacts(localContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('PhoneBookContacts', JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = user => {
    if (contacts.find(el => el.name === user.name)) {
      alert(`${user.name} is already in contacts`);
      return;
    }
    setContacts(prev => [...prev, { ...user, id: nanoid() }]);
  };

  const onCheangedFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const removeContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <GeneralTitle>Phonebook</GeneralTitle>
      <Section>
        <SimpleForm onAddContact={onAddContact} />
      </Section>

      <Section title="Find contacts by name">
        <Filter onCheangedFilter={onCheangedFilter} filterValue={filter} />
      </Section>

      <Section title="Contacts">
        <ContactsList
          contacts={contacts}
          filter={filter}
          removeContact={removeContact}
        />
      </Section>
    </Container>
  );
};
