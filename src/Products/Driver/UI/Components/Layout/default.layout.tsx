/**
 * Next
 */
import Image from 'next/image';

/**
 * Lib
 */
import PropTypes from 'prop-types';
import DefaultMeta from '@/Products/Driver/UI/Components/Meta/default.meta';

/**
 * Component
 * @param children
 * @param title
 * @param description
 * @constructor
 */
const DefaultLayout: React.FC<Props> = ({ children, title, description }) => {
  return (
    <>
      <DefaultMeta title={title} description={description} />
      <div className="flex">
        <aside className="flex flex-col h-screen w-72 border-r fixed">
          <div className="flex items-center h-16 border-b pl-4">
            <Image src={'/img/logo/logo.png'} width={70} height={65} alt={'logo'} />
            <h1 className="text-lg font-bold font-mono from-gray-200">Adminator</h1>
          </div>
          <ul className="overflow-y-scroll">
            <li>aaa</li>
            <li>bbb</li>
            <li>ccc</li>
          </ul>
        </aside>
        <div className="flex flex-col flex-1 h-screen pl-72">
          <header className="border-b w-full bg-white h-16">header</header>
          <main className="flex flex-col flex-1 overflow-y-scroll" style={{ height: 'calc(100vh - 48px)' }}>
            <div className="flex-grow">{children}</div>
            <footer className="border-t">footer</footer>
          </main>
        </div>
      </div>
    </>
  );
};

/**
 * Type
 */
type Props = {
  title: string;
  description: string;
};

DefaultLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DefaultLayout;
