import PropTypes from 'prop-types';
import { useDelateContactMutation } from '../../redux/contactsApi';
import { BsPersonFill, BsTrash, BsTelephoneFill } from 'react-icons/bs';
import { LoadingButton } from '@mui/lab';
import { Item, TextWrap, Text } from './ContactListItem.styled';

export const ContactListItem = ({ contact }) => {
  const [delateContact, { isLoading }] = useDelateContactMutation();

  return (
    <Item>
      <TextWrap>
        <BsPersonFill />
        <Text>
          name: <b>{contact.name}</b>
        </Text>
      </TextWrap>
      <TextWrap>
        <BsTelephoneFill />
        <Text>
          number: <b>{contact.phone}</b>
        </Text>
      </TextWrap>
      <LoadingButton
        type="button"
        onClick={() => delateContact(contact.id)}
        color={'error'}
        endIcon={<BsTrash />}
        loading={isLoading}
        loadingPosition="end"
        variant="outlined"
        disabled={isLoading}
      >
        Delate
      </LoadingButton>
    </Item>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string),
};
