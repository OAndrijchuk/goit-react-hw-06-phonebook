import { Contact } from './Contact/Contact';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redax/actions';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredCotacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  const removeSomContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <List>
      {contacts.length === 0 ? (
        <li>
          <h3>Sorry, but the list is empty!</h3>
        </li>
      ) : filter ? (
        filteredCotacts.map(contact => (
          <Contact
            contact={contact}
            removeContact={removeSomContact}
            key={contact.id}
          />
        ))
      ) : (
        contacts.map(contact => (
          <Contact
            contact={contact}
            removeContact={removeSomContact}
            key={contact.id}
          />
        ))
      )}
    </List>
  );
};

ContactsList.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
