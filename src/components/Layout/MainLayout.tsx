import { SideItemDrawer } from "../Elements";

// const containerStyle: React.CSSProperties = {
//   backgroundColor: "yellow",
//   margin: "30px",
// };

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <SideItemDrawer>{children}</SideItemDrawer>
    </div>
  );
};
