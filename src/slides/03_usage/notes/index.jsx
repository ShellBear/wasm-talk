import React from 'react';

import Note from '../../../components/Note';

import Note1 from './one.md';
import Note2 from './two.md';

const one = <Note note={Note1} />;
const two = <Note note={Note2} />;

export default { one, two };
