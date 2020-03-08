import React from 'react';
import { connect } from 'react-redux';
import ContactsListItem from './ContactsListItem';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';

const { contactsList } = styles;

const ContactsList = ({ contacts }) => (
  <ul className={contactsList}>
    {contacts.map(({ id }) => (
      <ContactsListItem key={id} id={id} />
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );

  return {
    contacts: filteredContacts,
  };
};

export default connect(mapStateToProps)(ContactsList);
