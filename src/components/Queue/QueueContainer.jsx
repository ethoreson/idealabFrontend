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
			<p>{totalJobsInWaiting} jobs in queue</p>
			{renderPrintCards}
		</div>
	);
};

export default QueueContainer;
