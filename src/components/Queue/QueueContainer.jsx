import React, { useState, useEffect } from 'react';
import dummyData from '../dummyData';
import PrintCardContainer from './components/PrintCardContainer';
import './QueueContainer.css';
import SearchBar from './components/SearchBar';

const QueueContainer = () => {
	const [data, setData] = useState(dummyData);
	const [filteredData, setFilteredData] = useState(data);
	const [stringedValues, setStringedValues] = useState([]);
	let totalJobsInWaiting = data.length;

	useEffect(() => {
		const filteredKeys = ['name', 'email', 'color', 'status', 'fileName', 'comments'];
		const searchValues = data.map((printJob, index) => {
        	let valueString = '';
            for (var key in printJob) {
                if (filteredKeys.indexOf(key) !== -1) {
                    valueString = valueString + ' ' + printJob[key];
                }
            }
            return printJob[index] = valueString;
        });
		setStringedValues(searchValues);
	}, [data]);

	const filterByTerm = (searchTerm) => {
		const filteredSearch = data.filter((printJob, i) => {
			return stringedValues[i].indexOf(searchTerm) !== -1;
		});
		setFilteredData(filteredSearch);
	}

	const renderPrintCards = filteredData.map((el, i) => (
		<PrintCardContainer data={el} key={i} />
	));

	return (
		<div>
			<SearchBar filterByTerm={filterByTerm} />
			<ul className='banner'>
				<li className='col10'></li>
				<li className='col20'>File Name</li>
				<li className='col20'>Color</li>
				<li className='col20'>Submitted</li>
				<li className='col20'>Status</li>
				<li className='col10'>{totalJobsInWaiting} jobs in queue</li>
			</ul>
			{renderPrintCards}
		</div>
	);
};

export default QueueContainer;
