import React, { useState } from 'react';
import dummyData from '../dummyData';
import PrintCardContainer from './components/PrintCardContainer';
import './QueueContainer.css';

const QueueContainer = () => {
  let totalJobsInWaiting;
  const [data,setData] = useState(dummyData);
  // console.log(data);
  totalJobsInWaiting = data.length;

  const renderPrintCards = data.map((el, i) => <PrintCardContainer data={el} key={i} />)


  return (
    <div>
        <p>{totalJobsInWaiting} jobs in queue</p>
        <ul className='banner'>
          <li className='col10'></li>
          <li className='col20'>File Name</li>
          <li className='col20'>Color</li>
          <li className='col20'>Submitted</li>
          <li className='col20'>Status</li>
        </ul>
        {renderPrintCards}
    </div>
  );
}

export default QueueContainer;