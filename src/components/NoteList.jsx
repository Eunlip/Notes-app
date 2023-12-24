import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, onDelete, onArchive, children, isArchive }) => {
	return (
		<>
			<h2 className='note-list__h2'>{children}</h2>
			{notes.length ? (
				<div className='notes-list'>
					{notes.map((note) => (
						<NoteItem
							key={note.id}
							id={note.id}
							onDelete={onDelete}
							onArchive={onArchive}
							isArchive={isArchive}
							{...note}
						/>
					))}
				</div>
			) : (
				<p className='notes-list__empty-message'>Tidak ada catatan</p>
			)}
		</>
	);
};

export default NoteList;
