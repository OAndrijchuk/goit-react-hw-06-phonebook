import PropTypes from 'prop-types';
import { Doters, Item } from './Contact.styled';
import { Button } from 'components/Form/SimpleForm.styled';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <div>{contact.name}</div>
      <Doters></Doters>
      <div>{contact.number}</div>
      <Button type="button" onClick={() => dispatch(removeContact(contact.id))}>
        Delete
      </Button>
    </Item>
  );
};
Contact.propTypes = {
  contact: PropTypes.shape({
    number: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
  }),
};
