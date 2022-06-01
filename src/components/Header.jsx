import { NavLink } from 'react-router-dom';

function Header({ changeFavorite }) {
  return (
    <header className='header'>
      <div className='content-container'>
        <nav className='nav'>
          <NavLink
            to={`/`}
            className='nav__link'
            onClick={(e) => changeFavorite}
          >
            Все котики
          </NavLink>
          <NavLink
            to={`/favorites`}
            className='nav__link'
            onClick={(e) => changeFavorite(e)}
          >
            Любимые котики
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
