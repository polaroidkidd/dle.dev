import React from 'react';
import Loader from 'react-loader-spinner';
import './loading-indicator.scss';

const LoadingIndicator = () => {
  return (
    <div className={'loadingIndicator'}>
      <Loader type="Oval" color={'#ADADAD'} width={100} height={100} />
    </div>
  );
};

export { LoadingIndicator };
