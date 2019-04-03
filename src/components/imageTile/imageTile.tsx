import React, { FunctionComponent } from 'react';
import "./imageTile.css";

interface Props {
  classNames?: string
  imgUrl: string,
  children: any,
}

const imageTile: FunctionComponent<Props> = ({ imgUrl, children, classNames }) => {
  let classes = `imageTile ${classNames}`;

  return (
    <div className={classes} style={{ backgroundImage: `url("${imgUrl}")`}}>
      {children}
    </div>
  );
};

export default imageTile;