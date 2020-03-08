import React from 'react';
import Phonebook from './PhoneBook';
import ContactsList from './ContactsList';
import ContactFilter from './ContactFilter';
import Section from './Section';
import withTheme from './hoc/withTheme';
import PropTypes from 'prop-types';

const PhoneBookPage = ({ theme }) => (
  <div className={`phoneBook ${theme.config.bodyBg}`}>
    <Section title="Phonebook">
      <Phonebook />
    </Section>
    <Section title="Contacts">
      <ContactFilter />
      <ContactsList />
    </Section>
  </div>
);

PhoneBookPage.propTypes = {
  theme: PropTypes.shape({
    config: PropTypes.shape({
      bodyBg: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withTheme(PhoneBookPage);
