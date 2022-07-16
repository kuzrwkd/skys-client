import { FC, ReactNode } from 'react';
import {
  classnames,
  borderColor,
  backgroundColor,
  padding,
  borderWidth,
  fontSize,
  textColor,
  margin,
} from 'tailwindcss-classnames';

const classes = {
  card: classnames(borderWidth('border'), borderColor('border-gray-300'), backgroundColor('bg-white'), padding('p-4')),
  title: classnames(fontSize('text-2xl'), textColor('text-gray-900'), margin('mb-8')),
};

const Card: FC<Props> = (props) => {
  const { children, title = 'unknown' } = props;
  return (
    <div className={classes.card}>
      {title === 'unknown' ? '' : <h4 className={classes.title}>{title}</h4>}
      {children}
    </div>
  );
};

type Props = {
  children: ReactNode;
  title?: string;
};

export default Card;
