import React from "react";
import ReactDOM from "react-dom/client";

const restuarantDetails = [
  {
    id:1,
    name: "KFC",
    cusines: ["Arabian", "Americam"],
    rating: 4.7,
  },
  {
    id:2,
    name: "Albek",
    cusines: ["Indian", "Americam"],
    rating: 4.9,
  },
];

const Header = () => {
  return (
    <div className="header">
      <img alt="Not Availbale" src=""></img>
      <ul>
        <li>Home</li>
        <li>About US</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const RestaurantCards = ({ name, cusines, rating }) => {
  // console.log({props})
  return (
    <div className="restuarant-cards">
      <img alt="Not Available" src=""></img>
      <h4>{name}</h4>
      <h5>{cusines.join(", ")}</h5>
      <h5>{rating} stars</h5>
    </div>
  );
};

const Body = () => {
  {
    /* Level 0  (Optimizations) */
  }

  {
    /* { <RestaurantCards restuarantDetails={restuarantDetails[0]} />
      <RestaurantCards restuarantDetails={restuarantDetails[1]} /> } */
  }

  {
    /* Level 1 Optimization */
  }
  {
    /* Instead of repeating we pass it usin map */
    /* return <RestaurantCards restaurantDetails = {restuarantDetail} /> 
   restaurantDetails.name
   restaurantDetails.cusines */
  }

  {
    /* Level 2 Optimaization */
  }
  {
    // Spread the object, and in parameters just recieve individual keys
    /* return <RestaurantCards restaurantDetails = {...restuarantDetail} /> 
      ({name,cusine,rating})
      {name}
      {cusine}
      {rating} */
  }

  //key is used for React reconciliation
  return (
    <React.Fragment>
      {restuarantDetails.map((restuarantDetail) => {
        return <RestaurantCards {...restuarantDetail} key={restuarantDetail.id} />;
      })}
    </React.Fragment>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      {/* <Footer /> */}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("mainContianer"));

root.render(<AppLayout />);
