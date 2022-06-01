function Footer({ title, setMore, more }) {
  return (
    <footer className='footer'>
      <span onClick={() => setMore(!more)}>{title}</span>
    </footer>
  );
}
export default Footer;
