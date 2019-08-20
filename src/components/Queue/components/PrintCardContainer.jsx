import React, { useState } from 'react';

const PrintCardContainer = ({data}) => {
  return (
    <div className='printCardContainer'>
        <p>{data.fileName}</p>
    </div>
  );
}

export default PrintCardContainer;