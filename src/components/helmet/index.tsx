import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

const Helmet: React.FC = () => {
  return (
    <ReactHelmet>
      <meta charSet="utf-8" />
      <title>Nubank</title>
      <link
        rel="icon"
        type="image/png"
        href="https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-3.png"
        sizes="50x50"
      />
    </ReactHelmet>
  );
};

export default Helmet;
