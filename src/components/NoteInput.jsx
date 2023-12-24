import React from 'react';

const MAX_LENGTH_TITLE = 50;

class NoteInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			body: '',
			charLimit: MAX_LENGTH_TITLE,
		};

		this.onTitleChange = this.onTitleChange.bind(this);
		this.onBodyChange = this.onBodyChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onTitleChange(event) {
		const inputTitle = event.target.value;
		let charLimit = MAX_LENGTH_TITLE - inputTitle.length;

		if (charLimit < 0) {
			charLimit = 0;
		}

		this.setState(() => ({
			title: inputTitle.slice(0, MAX_LENGTH_TITLE),
			charLimit,
		}));
	}

	onBodyChange(event) {
		this.setState({
			body: event.target.value,
		});
	}

	onSubmit(event) {
		event.preventDefault();
		this.props.addNote(this.state);

		// Reset state to empty values after submitting
		this.setState({
			title: '',
			body: '',
			charLimit: MAX_LENGTH_TITLE,
		});
	}

	render() {
		return (
			<div className='note-input'>
				<h2>Buat Catatan</h2>
				<form onSubmit={this.onSubmit}>
					<p className='note-input__title__char-limit'>
						Sisa Karakter : {this.state.charLimit}
					</p>
					<input
						className='note-input__title'
						type='text'
						placeholder='Masukkan Judul disini...'
						required
						value={this.state.title}
						onChange={this.onTitleChange}
					/>
					<textarea
						className='note-input__body'
						placeholder='Tuliskan catatanmu disini...'
						required
						value={this.state.body}
						onChange={this.onBodyChange}
					></textarea>
					<button type='submit'>Buat</button>
				</form>
			</div>
		);
	}
}

export default NoteInput;
