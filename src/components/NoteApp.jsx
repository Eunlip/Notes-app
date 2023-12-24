import React from 'react';
import { getInitialData } from '../utils';
import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            searchKeywords: '',
            archivedNotes: [],
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveChangeHandler = this.onArchiveChangeHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.filteredNotes = this.filteredNotes.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        const archivedNotes = this.state.archivedNotes.filter((note) => note.id !== id);

        this.setState({ notes, archivedNotes });
    }

    onAddNoteHandler({ title, body, archived }) {
        this.setState((prevState) => {
            const date = new Date().toISOString();
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: date,
                        archived,
                    },
                ],
            };
        });
    }

    onArchiveChangeHandler(id) {
        const noteToArchive = this.state.notes.find((note) => note.id === id);
        const archiveToNote = this.state.archivedNotes.find((note) => note.id === id);
        if (noteToArchive) {
            this.setState((prevState) => ({
                notes: prevState.notes.filter((note) => note.id !== id),
                archivedNotes: [...prevState.archivedNotes, noteToArchive],
            }));
        } else {
            this.setState((prevState) => ({
                archivedNotes: prevState.archivedNotes.filter((note) => note.id !== id),
                notes: [...prevState.notes, archiveToNote],
            }));
        }
    }

    onSearchHandler(value) {
        this.setState({ searchKeywords: value });
    }

    filteredNotes(currentNotes, searchKeywords) {
        const notes = currentNotes.filter((note) => {
            return note.title.toLowerCase().includes(searchKeywords.toLowerCase());
        });
        return notes;
    }

    render() {
        const { notes, archivedNotes, searchKeywords } = this.state;
        return (
            <>
                <NoteHeader value={this.state.searchKeywords} onSearch={this.onSearchHandler} />
                <NoteBody
                    notes={this.filteredNotes(notes, searchKeywords)}
                    archivedNotes={this.filteredNotes(archivedNotes, searchKeywords)}
                    addNote={this.onAddNoteHandler}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveChangeHandler}
                />
            </>
        );
    }
}

export default NoteApp;
