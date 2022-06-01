import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

function Layout({ changeFavorite }) {
  return (
    <>
      <Header changeFavorite={changeFavorite} />
      <main className='main'>
        <div className='content-container'>
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Layout;
