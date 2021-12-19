import { Route, Routes } from "react-router-dom";

const ExternalLink: any = ({ externalUrl }: { externalUrl: string }) => {
  window.location.href = externalUrl;
  return undefined;
};

const Redirect = ({ externalUrl }: { externalUrl: string }) => {
  return (
    <Routes>
      <Route path="/" element={<ExternalLink externalUrl={externalUrl} />} />
    </Routes>
  );
};

export default Redirect;
