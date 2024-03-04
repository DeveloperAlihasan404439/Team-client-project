import { Helmet } from "react-helmet";

const HelmetTitle = ({title}) => {
  return (
    <Helmet>
      <title>Swifty Mail | {title}</title>
    </Helmet>
  );
};

export default HelmetTitle;
