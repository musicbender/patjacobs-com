import { FC } from 'react';
import theme from '@styles/theme';
import { LogoWrapper } from './styles';

enum Colors {
  'white',
  'black',
  'yellow',
  'purple',
  'orange',
  'aqua',
}

type Props = {
  color?: keyof typeof Colors;
  className?: string;
};

const Logo: FC<Props> = ({ color = 'white', className }) => {
  const colors: any = {
    white: '#fff',
    black: 'rgb(30,30,30)',
    ...theme.corePalette,
  };

  return (
    <LogoWrapper
      width="100%"
      height="100%"
      viewBox="0 0 21 21"
      color={colors[color]}
      className={className}
    >
      <g>
        <path d="M19.5,1.5l0,18l-11.938,0l-0.062,-6" />
        <path d="M1.5,19.5l0,-18l12,0l0,6" />
      </g>
    </LogoWrapper>
  );
};

export default Logo;
