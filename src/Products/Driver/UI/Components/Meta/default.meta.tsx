/**
 * Next
 */
import Head from 'next/head';

/**
 * React
 */
import { FC } from 'react';

/**
 * Lib
 */
import PropTypes from 'prop-types';

/**
 * Component
 * @param title
 * @param description
 * @constructor
 */
const DefaultMeta: FC<Props> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}&nbsp;|&nbsp;Create Next App</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <meta name="description" content={description} />
    </Head>
  );
};

/**
 * Type
 */
type Props = {
  title: string;
  description: string;
};

DefaultMeta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DefaultMeta;
