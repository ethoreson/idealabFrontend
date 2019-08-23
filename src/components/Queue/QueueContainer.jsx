import React, { useState } from 'react';
import dummyData from '../dummyData';
import PrintCardContainer from './components/PrintCardContainer';



const QueueContainer = () => {
  let totalJobsInWaiting;
  const [data,setData] = useState(dummyData);
  // console.log(data);
  totalJobsInWaiting = data.length;

  const renderPrintCards = data.map((el, i) => <PrintCardContainer data={el} key={i} />)


  return (
    <div>
        <p>{totalJobsInWaiting} jobs in queue</p>
        {renderPrintCards}
    </div>
  );
}

export default QueueContainer;