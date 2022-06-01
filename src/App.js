import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NoMatch from './pages/NoMatch';

import getData from './api/api'

function App() {
  const [data, setData] = useState([])
  const [more, setMore] = useState(false)

  useEffect(() => {
    getData().then((data) => {
      data.forEach(el => el.visible = false);
      setData(data);
    });
  }, []);

  useEffect(() => {
    getData(15).then((dataNext) => {
      data.forEach(el => !el.hasOwnProperty('visible') ? el.visible = false : null);
      const newData = [...data, ...dataNext]
      setData(newData);
    });
    // eslint-disable-next-line
  }, [more]);

  const changeFavorite = (id) => {
    const newData = data.map(el => {
      if (el.id === id) {
        el.visible = !el.visible
        return el
      }
      return el
    })
    setData(newData);
  }


  return (
    <div className="main-container">
      <Routes>
        <Route
          path='/'
          element={<Layout changeFavorite={changeFavorite} />}
        >
          <Route index element={<Home data={data} changeFavorite={changeFavorite} setMore={setMore} more={more} />} />
          <Route path='favorites' element={<Favorites data={data} changeFavorite={changeFavorite} />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
