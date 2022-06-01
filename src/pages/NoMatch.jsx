import { Link } from 'react-router-dom';

function NoMatch(navItemsData, showText) {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <button className=' btn_goHome'>
        <Link to='/' onClick={() => showText(navItemsData[1].id)}>
          Go to the home page
        </Link>
      </button>
    </div>
  );
}

export default NoMatch;
