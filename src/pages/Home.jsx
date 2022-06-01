import Loader from '../components/Loader';
import Cart from '../components/Cart';
import Footer from '../components/Footer';

function Home({ data, changeFavorite, setMore, more }) {
  const title = '... загружаем еще котиков ...';
  const cats = data.map((cat) => (
    <Cart
      key={cat.id}
      id={cat.id}
      url={cat.url}
      visible={cat.visible}
      changeFavorite={changeFavorite}
    />
  ));

  return (
    <>
      <div className='images-container'>{!data.length ? <Loader /> : cats}</div>
      <Footer title={title} setMore={setMore} more={more} />
    </>
  );
}
export default Home;
