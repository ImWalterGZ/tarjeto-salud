"use client";

import NextTopLoader from "nextjs-toploader";
import config from "@/config";

const ClientLayout = ({ children }) => {
  return (
    <>
      <NextTopLoader color={config.colors.brand.primary} showSpinner={false} />
      {children}
    </>
  );
};

export default ClientLayout;
