import React from 'react';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

const NoteBody = ({ notes, addNote, onDelete, onArchive, archivedNotes=[], isArchive }) => {
	

	return (
		<div className='note-app__body'>
			<NoteInput addNote={addNote} />
			<NoteList
				onDelete={onDelete}
				onArchive={onArchive}
				notes={notes}
				children={'Catatan Aktif'}
				isArchive={isArchive ? true : false}
			/>
			<NoteList
				onDelete={onDelete}
				onArchive={onArchive}
				notes={archivedNotes}
				children={'Arsip'}
				isArchive={isArchive ? false : true}
			/>
		</div>
	);
};

export default NoteBody;
