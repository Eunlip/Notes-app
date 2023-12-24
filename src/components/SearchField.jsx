import React from 'react';

class SearchField extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			keyword: '',
		};

		this.onSearch = this.onSearch.bind(this);
	}

	onSearch(value) {
    this.setState({ keyword: value });
    this.props.onSearch(value);
	}

	render() {
		return (
			<div className='note-search'>
				<input
					type='text'
					placeholder='Cari catatan kamu ...'
					value={this.state.keyword}
					onChange={(e) => this.onSearch(e.target.value)}
				/>
			</div>
		);
	}
}

export default SearchField;
