import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];

  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Autehntic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all deliciouse
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name}></Pizza>
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu.Please come back later</p>
      )}

      {/* <Pizza
        name="Pizza Prosciutto"
        infredient="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/prosciutto.jpg"
        price={12}
      ></Pizza>

      <Pizza
        name="Pizza Funghi"
        infredient="Tomato, mushrooms"
        price={10}
        photoName="pizzas/funghi.jpg"
      ></Pizza> */}
    </main>
  );
}

function Pizza({ pizzaObject }) {
  console.log(pizzaObject);

  // if (pizzaObject.soldOut === true) return null;

  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name}></img>
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        {pizzaObject.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObject.price}</span>
        )}
        {/* <span>{pizzaObject.soldOut ? "Sold OUT" : pizzaObject.price}</span> */}
      </div>
    </li>
  );
}

function Header() {
  const style = { color: "red", fontSize: "48", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1 style={style}>Fast react Pizza Co.</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  if (!isOpen)
    return (
      <p>
        We're happ to welcome you Bettwen {openHour}:00 and {closeHour}:00
      </p>
    );

  // const message = (mesage) => {
  //   if (isOpen === true) {
  //     mesage = "Great: We are Open";
  //   } else {
  //     mesage = "Soory, We are Close";
  //   }
  //   return mesage;
  // };

  // if (hour >= openHour && hour <= closeHour) alert("We're curremtly open");
  // else alert("Sorry we're closed");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour}>
          {" "}
        </Order>
      ) : (
        <p>
          We're happ to welcome you bettwen {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
