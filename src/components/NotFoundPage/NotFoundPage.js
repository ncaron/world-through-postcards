import React from 'react';
import './NotFoundPage.css';

export default (props) => {
  console.log(props.location.pathname);
  return(
    <div className="not-found">
      <p>404</p>
      <p>Not Found</p>
      <p>Page {props.location.pathname} does not exist.</p>
    </div>
  );
}
