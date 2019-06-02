import React from 'react';
import { Notes } from 'spectacle'
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const Note = ({ note }) => (
  <Notes>
    <ReactMarkdown source={note} escapeHtml={false} />
  </Notes>
);

Note.propTypes = {
  note: PropTypes.string.isRequired
};

export default Note;
