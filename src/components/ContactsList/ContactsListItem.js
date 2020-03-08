import React from 'react';
import { connect } from 'react-redux';
import contatcsActions from '../../redux/contacts/contactsActions';
import withTheme from '../hoc/withTheme';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';

const { contactsListItem, contactButton } = styles;

const ContactsListItem = ({ name, number, onDeleteContact, theme }) => (
  <li className={contactsListItem}>
    <p>
      {name}: {number}
    </p>
    <button
      type="submit"
      onClick={onDeleteContact}
      className={`${contactButton} ${theme.config.btnBgColor}`}
    >
      Delete
    </button>
  </li>
);

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  theme: PropTypes.shape({
    config: PropTypes.shape({
      btnBgColor: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find(item => item.id === ownProps.id);
  return {
    ...item,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteContact: () => dispatch(contatcsActions.deleteContact(ownProps.id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(ContactsListItem));
