import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import { Outlet } from "react-router-dom";
interface Props {
  children?: React.ReactNode;
}
export const BaseLayout = ({ children }: Props) => {
  return (
    <div className="container w-full mx-auto">
      <Header />
      <main className="h-screen">
        {children} <Outlet />
      </main>
      <Footer />
    </div>
  );
};
