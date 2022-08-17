import { Formik } from 'formik';
import { toast } from 'react-toastify';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/contactsApi';
import { FormBox, InputName, InputBox, BtnWrap } from './PhoneBookForm.styled';
import { LoadingButton } from '@mui/lab';
import SendIcon from '@mui/icons-material/Send';

export const PhoneBookForm = () => {
  const [addContact, { isLoading }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const submitForm = ({ name, number }, { resetForm }) => {
    const isInclude = contacts.find(
      person => person.name.toLowerCase() === name.toLowerCase()
    );

    if (isInclude) {
      toast(` ${name} is already in contacts.`);
      return;
    }

    try {
      addContact({ name, phone: number });
      resetForm();
    } catch (error) {
      toast(error.message);
    }
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={submitForm}>
      <FormBox>
        <InputName>
          Name
          <InputBox
            type="text"
            name="name"
            required
            placeholder="jason Statham"
          />
        </InputName>
        <InputName>
          Number
          <InputBox
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="+380991234567"
            required
          />
        </InputName>
        <BtnWrap>
          <LoadingButton
            type="submit"
            endIcon={<SendIcon />}
            loading={isLoading}
            loadingPosition="end"
            variant="contained"
            disabled={isLoading}
          >
            Add constact
          </LoadingButton>
        </BtnWrap>
      </FormBox>
    </Formik>
  );
};
