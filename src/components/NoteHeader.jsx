import React from 'react';
import SearchField from './SearchField';

const NoteHeader = ({ onSearch }) => {
	return (
		<div className='note-app__header'>
			<h1>Notes</h1>
			<SearchField onSearch={onSearch} />
		</div>
	);
};

export default NoteHeader;
