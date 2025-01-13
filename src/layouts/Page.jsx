import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router';

function Page () {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Page;