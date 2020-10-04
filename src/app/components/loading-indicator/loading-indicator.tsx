import React from 'react';
import style from './loading-indicator.module.scss';
import Loader from 'react-loader-spinner';

const LoadingIndicator = () => {
  return (
  // @ts-ignore
    <div className={style.loadingIndicator}>
      <Loader type="Oval" color={'#ADADAD'} width={100} height={100} />
    </div>
  );
};

export { LoadingIndicator };
