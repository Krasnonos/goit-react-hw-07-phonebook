import { ContactListItem } from '../ContactsListItem/ContactsListItem';
import { useGetContactsQuery } from '../../redux/contactsApi';
import { Title, Box, ContactsBox } from './ContactList.styled';

export const ContactList = () => {
  const { data: contacts } = useGetContactsQuery();

  return (
    <Box>
      <Title>Contacts</Title>
      <ContactsBox>
        {contacts &&
          contacts.map(contact => (
            <ContactListItem contact={contact} key={contact.id} />
          ))}
      </ContactsBox>
    </Box>
  );
};
