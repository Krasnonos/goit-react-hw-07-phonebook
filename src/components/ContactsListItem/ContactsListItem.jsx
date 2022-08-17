import PropTypes from 'prop-types';
import { useDelateContactMutation } from '../../redux/contactsApi';
import { BsPersonFill, BsTrash, BsTelephoneFill } from 'react-icons/bs';
import { Item, RemoveBtn } from './ContactListItem.styled';

export const ContactListItem = ({ contact }) => {
  const [delateContact] = useDelateContactMutation();
  return (
    <Item>
      <BsPersonFill />
      <p>name: {contact.name}</p>
      <BsTelephoneFill />
      <p>number: {contact.phone}</p>
      <RemoveBtn type="button" onClick={() => delateContact(contact.id)}>
        Delate <BsTrash />
      </RemoveBtn>
    </Item>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string),
};
