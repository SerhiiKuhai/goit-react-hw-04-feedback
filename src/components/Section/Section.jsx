import React from 'react';
import PropTypes from 'prop-types';
import { Sections, Title } from './Sections.styled';

export function Section({ title, children }) {
  return (
    <Sections>
      <Title>{title}</Title>
      {children}
    </Sections>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
