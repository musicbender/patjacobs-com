import React from 'react';
import { Link } from 'gatsby';
import { ButtonTypes } from '../../../../types';

type Props = {
  type: ButtonTypes,
  text: string,
  url: string,
  isExternal: boolean,
  classNames: string,
  callback: () => any,
}


const Button = ({
  type = 'line',
  text = 'Learn More',
  url = '/',
  isExternal = false,
  classNames,
  callback = () => false
}: Props) => {
  const buttonClass = cx(style.btn, style[type], classNames);

  const getInnerContent = (
    <div className={style.innerWrapper}>
      {
        type === 'line' &&
        <span className={cx(style.line)}></span>
      }
      <p>{text}</p>
    </div>
  );

  switch (true) {
    case isExternal:
      return (
        <a className={cx(buttonClass)} href={url} target="_blank">
          {getInnerContent}
        </a>
      );
    case !!url:
      return (
        <Link
          className={cx(buttonClass)}
          to={url}
          onClick={(callback) ? callback : null}
        >
          {getInnerContent}
        </Link>
      );
    default:
      return (
        <div
          className={cx(buttonClass)}
          onClick={(e) => { callback(e) }}
        >
          {getInnerContent}
        </div>
      );
  }
}

export default Button;
