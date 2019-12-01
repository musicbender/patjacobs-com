import React from 'react';
import { SvgRoot } from './styles';

type Props = {
  el: React.ReactElement<any> | string
  styles: string
  svg: React.ReactHTMLElement<any>
}

export const Svg = ({
  el,
  styles,
  svg
}: Props) => {
    const Element: React.ReactElement<any> | string = el;
    return (
        <Element
          style={styles}
          dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
}

Svg.defaultProps = {
    el: 'span',
    className: ''
};

export default Svg;
