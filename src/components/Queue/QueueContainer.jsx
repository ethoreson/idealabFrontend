import React, { useState } from 'react';
import dummyData from '../dummyData';
import PrintCardContainer from './components/PrintCardContainer';
import './QueueContainer.css';

const QueueContainer = () => {
	const [data, setData] = useState(dummyData);
	const [search, setSearch] = useState('');

	let totalJobsInWaiting = data.length;

	const updateSearch = event => {
		setSearch(event.target.value.substr(0, 20));
	};

	let filteredData = data.filter(printJob => {
		return printJob.color.indexOf(search) !== -1;
	});

	const renderPrintCards = filteredData.map((el, i) => (
		<PrintCardContainer data={el} key={i} />
	));

	return (
		<div>
			<div className='search-container'>
				<input
					className='search-bar'
					value={search}
					onChange={updateSearch}
					type='text'
					placeholder='Search...'
				/>
			</div>
			<p>{totalJobsInWaiting} jobs in queue</p>
			{renderPrintCards}
		</div>
	);
};

export default QueueContainer;
