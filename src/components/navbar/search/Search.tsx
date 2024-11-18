import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import './search.scss';

export default function Search() {
	return (
		<div id='search'>
			<InputBase placeholder='Search' inputProps={{ 'aria-label': 'search' }} />
			<div id='search-icon-wrapper'>
				<IconButton aria-label='search'>
					<SearchIcon />
				</IconButton>
			</div>
		</div>
	)
}