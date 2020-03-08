import React from 'react';
import { connect } from 'react-redux';
import contatcsActions from '../../redux/contacts/contactsActions';
import PropTypes from 'prop-types';
import styles from './ContactFilter.module.css';

const { input } = styles;

const ContactFilter = ({ value, onChangeFilter }) => (
  <input
    className={input}
    type="text"
    placeholder="Search contacts by name*"
    value={value}
    onChange={({ target }) => onChangeFilter(target.value)}
  />
);

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onChangeFilter: contatcsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
