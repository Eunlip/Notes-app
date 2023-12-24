  import React from 'react';
  import DeleteButton from './DeleteButton';
  import ArchiveButton from './ArchiveButton';
  import { showFormattedDate } from '../utils';

  const NoteItem = ({
    title,
    createdAt,
    body,
    id,
    onDelete,
    onArchive,
    isArchive,
  }) => {
    const formattedDate = showFormattedDate(createdAt);

    return (
      <div className='note-item'>
        <div className='note-item__content'>
          <h3 className='note-item__title'>{title}</h3>
          <p className='note-item__date'>{formattedDate}</p>
          <p className='note-item__body'>{body}</p>
        </div>
        <div className='note-item__action'>
          <DeleteButton id={id} onDelete={onDelete} />
          <ArchiveButton id={id} onArchive={onArchive} isArchive={isArchive}>
            {isArchive ? 'Pindahkan' : 'Arsipkan'}
          </ArchiveButton>
        </div>
      </div>
    );
  };

  export default NoteItem;
