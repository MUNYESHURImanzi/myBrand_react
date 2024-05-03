
import React from 'react';

const ContentReader = ({ content }) => {
  return <div className='nextpar' dangerouslySetInnerHTML={{ __html: content }} />;
};

export default ContentReader;
