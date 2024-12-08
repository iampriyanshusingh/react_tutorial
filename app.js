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

const RestroCard = (props) => {
  console.log(props)
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1702303342/77abb9d0949e33887be89fc4aa802b7a.jpg"
      ></img>
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">SEARCH</div>
      <div className="res-container">
        <RestroCard
          resName="Holy Chopsticks"
          cuisine="Biryani, North Indian, Asian"
          rating="4.3"
          deliveryTime="38 mins"
        />
        <RestroCard 
        resName="KFC"
        cuisine="Chicken, Wings, Puffs"
        rating="4.4"
        deliveryTime="10mins"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
