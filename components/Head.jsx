import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Mohammed Raihan's Profolio."
      />
      <meta
        name="keywords"
        content="Mohammed Raihan"
      />
      <meta property="og:title" content="Mohammed Raihan's Portfolio" />
      <meta
        property="og:description"
        content="Mohammed Raihan's Profolio."
      />
      <meta property="og:image" content="https://imgur.com/YTNNknY.png" />
      <meta property="og:url" content="https://gkos.dev" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Mohammed Raihan',
};
