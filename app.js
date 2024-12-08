/* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="logo"
          src="https://imgs.search.brave.com/5N75K3mvrfI6aiaoWemQTIQq1aMRd9JYtl30GBq-Gq4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0Lzc3LzA4LzA0/LzM2MF9GXzQ3NzA4/MDQ5NF9Rcm9LMHlv/aEtsSTE0U0dPUnFq/b1hJR3Y1Z0FDd3ox/Ni5qcGc"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>CART</li>
        </ul>
      </div>
    </div>
  );
};

const RestroCard = () => {
  return (
    <div className="res-card"></div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">SEARCH</div>
      <div className="res-container">

      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
