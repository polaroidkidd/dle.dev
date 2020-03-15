import React from "react";
import "./loading-indicator.scss";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";

const LoadingIndicator = () => {
  const {promiseInProgress} = usePromiseTracker();
  // return promiseInProgress
  //   ? <></>
  //   : (
  //     <div className=".loading-indicator">
  //       <Loader type="MutatingDots" width={100} height={100}/>
  //     </div>
  //   );
  return (
    <div className=".loading-indicator">
      <Loader type="MutatingDots" width={100} height={100}/>
    </div>

  );
};

export { LoadingIndicator };