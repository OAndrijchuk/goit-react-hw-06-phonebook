import { Formik } from 'formik';
import * as yup from 'yup';
import {
  Button,
  ErrMassage,
  FieldNew,
  InputContainer,
  Lable,
  NewForm,
} from './SimpleForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const userSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, '<To short name!')
    .max(24, '<To long name!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      '<Invalid name format!'
    )
    .trim()
    .required('<Field is required!'),
  number: yup
    .string()
    .min(7, '<To short phone!')
    .max(18, '<To long phone!')
    .matches(
      /\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      '<The phone number format is incorrect!'
    )
    .trim()
    .required('<Field is required!'),
});

const initialValues = {
  name: '',
  number: '',
};

export const SimpleForm = () => {
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    if (contacts.find(el => el.name === values.name)) {
      alert(`${values.name} is already in contacts`);
      resetForm();
      return;
    }
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={userSchema}
    >
      <NewForm autoComplete="on">
        <InputContainer>
          <Lable htmlFor="userName">Name</Lable>
          <FieldNew
            id="userName"
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Jone Smit"
          />
          <ErrMassage component="p" name="name" />
        </InputContainer>
        <InputContainer>
          <Lable htmlFor="userPhone">Number</Lable>
          <FieldNew
            id="userPhone"
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="+380-55-555-55-55"
          />
          <ErrMassage component="p" name="number" />
        </InputContainer>
        <Button type="submit">Add contact</Button>
      </NewForm>
    </Formik>
  );
};
