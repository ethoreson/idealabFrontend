import React, { useState } from 'react';
import './PrintCardContainer.css';

const PrintCardContainer = ({ data }) => {
	const color = {
		background: data.color
	};

	return (
		<div className='printCardContainer'>
			<p>{data.fileName}</p>
			<p style={color}>{data.color}</p>
		</div>
	);
};

export default PrintCardContainer;
