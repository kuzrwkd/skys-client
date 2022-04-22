import { FC, ReactNode } from 'react';

const Card: FC<Props> = ({ children, title = 'unknown' }) => {
  return (
    <div className="border border-gray-300 bg-white p-4">
      {title === 'unknown' ? '' : <h4 className="text-2xl text-gray-900">{title}</h4>}
      {children}
    </div>
  );
};

type Props = {
  children: ReactNode;
  title?: string;
};

export default Card;
