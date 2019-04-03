import React, { FunctionComponent } from "react";
import "./imageTileTitle.css";
import ImageTile from "../imageTile/imageTile";

interface Props {
  classNames?: string;
  imgUrl: string;
  title: string;
  subTitle?: string;
  centerText?: boolean;
  backdrop?: boolean;
  underline?: boolean;
  bottomAlign?: boolean;
}

const imageTileTitle: FunctionComponent<Props> = ({ classNames, imgUrl, title, subTitle, centerText, backdrop, underline, bottomAlign }) => {
  const classes = `imageTileTitle ${
    centerText && "imageTileTitle--textCenter"
    } ${backdrop && "imageTileTitle--backdrop"} ${
    bottomAlign && "imageTileTitle--bottomAlign"}
    ${classNames}`;

  const textBlock = (
    <div className={classes}>
      <h4>{title}</h4>
      {subTitle && <p>{subTitle}</p>}
      {underline && <div className="imageTileTitle__underline"/>}
    </div>
  );

  return (
    <ImageTile classNames={classNames} imgUrl={imgUrl}>
      {textBlock}
    </ImageTile>
  );
};

export default imageTileTitle;