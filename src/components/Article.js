import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, date, text }) => (
  <article>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </article>
);

Article.defaultProps = {
  title: 'Title',
  text: 'default text',
  date: `${new Date()}`,
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};