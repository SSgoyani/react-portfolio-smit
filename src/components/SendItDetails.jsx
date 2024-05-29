import React from 'react';
import SenditTechnology from '../components/snditTechnology';

function SendItDetails() {
  return (
    <div>
      <div className=''>
        <h1 className='ProjectTitle text-4xl mb-5 tracking-tight text-blue-400 lg:text-6xl'>Send It</h1>
        <span className='text-1xl lg:text-2xl italic'> - Automated Media Organizer</span>
      </div>
      <SenditTechnology />
    </div>
  )
}

export default SendItDetails;