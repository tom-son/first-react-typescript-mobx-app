import React, { FunctionComponent } from 'react';

interface Props {
  backOnClick: any;
  nextOnClick: any;
  title: string;
}

const dateController: FunctionComponent<Props> = ({ backOnClick, nextOnClick, title }) => {
  return (
    <div>
      <button onClick={backOnClick}>back</button>
      <span>{title}</span>
      <button onClick={nextOnClick}>next</button>
    </div>
  );
};

export default dateController;