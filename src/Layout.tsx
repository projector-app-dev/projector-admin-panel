import { Layout as RALayout, CheckForApplicationUpdate } from "react-admin";
import { Menu } from "./components/nav/Menu";
import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  
  return (
    <RALayout menu={Menu}>
      {children}
      <CheckForApplicationUpdate />
    </RALayout>
  );
};
