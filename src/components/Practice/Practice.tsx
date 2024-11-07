import { useEffect, useState } from "react";
import styles from "./Practice.module.css";
import Alert from "./Alert";
import Button from "./Button";
import Like from "./Like/Like";
import ListGroup from "./ListGroup";
import UpdatingArrayOfObjects from "./UpdatingArrayOfObjects/UpdatingArrayOfObjects";
import NavBar from "./NavBar/NavBar";
import Cart from "./Cart/Cart";
import ExpandableText from "./ExpandableText/ExpandableText";
import Expenses from "./expense-tracker/components/Expenses";
import Form from "./Form/Form";
import { VscLoading } from "react-icons/vsc";
import ProductList from "./ProductList";
import FetchingData from "./FetchingData";

function Practice() {
  const [cartItems, setCartItems] = useState(["Product 1", "Product2"]);

  const [alertVisible, setAlertVisibility] = useState(false);
  const things = ["London", "Bucharest", "Brasov"];

  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClickDrink = () => {
    //this is -...object spreading
    setDrink({ ...drink, price: drink.price + 1 });
  };

  const [isLoading, setIsLoading] = useState(true);

  const [category, setCategory] = useState("");

  // !-Exercise
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "John",
  //   },
  // });

  // const handleGameClick = () => {
  //   setGame({ ...game, player: { ...game.player, name: "Dragos" } });
  // };
  // Exercise-!

  // !-Exercise
  // const [pizza, setPizza] = useState({
  //   name: "Spicy Pepperoni",
  //   toppings: ["Mushroom"],
  // });

  // const handlePizzaClick = () => {
  //   setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  // };
  // Exercise-!

  // !-Exercise
  // const [cart, setCart] = useState({
  //   discount: 0.1,
  //   items: [
  //     { id: 1, title: "Product 1", quantity: 1 },
  //     { id: 2, title: "Product 2", quantity: 1 },
  //   ],
  // });

  // const handleCartClick = (cartItemId: number) => {
  //   setCart({
  //     ...cart,
  //     items: cart.items.map((item) =>
  //       item.id === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
  //     ),
  //   });
  // };
  // Exercise-!

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading && (
        <div className={styles.preloader}>
          <p>
            <VscLoading className={styles.loadingIcon} size={50} />
          </p>
        </div>
      )}

      <div className="row">
        <div className="col-12 mb-3">
          <h3>Navbar</h3>
          <NavBar cartItemsCount={cartItems.length} />
        </div>
      </div>

      <div className="row">
        <hr />
        <div className="col-6 mb-3">
          <ListGroup
            items={things}
            heading="List group"
            onSelectItem={() => {}}
          />
        </div>
        <div className="col-6">
          <h3>Buttons</h3>

          <Button
            buttonText="Pericoool"
            onClick={() => setAlertVisibility(true)}
          />

          {alertVisible && (
            <Alert onClose={() => setAlertVisibility(false)}>
              <strong>Holy guacamole!</strong> You should check in on some of
              those fields below.
            </Alert>
          )}
        </div>
      </div>

      <div className="row">
        <hr />
        <div className="col-4 text-center">
          <h1>Like</h1>
          <Like onClick={() => console.log("awww")} />
        </div>

        <div className="col-4 text-center">
          <h3>Drink - object spreading</h3>
          <p>{drink.price}</p>
          <button onClick={handleClickDrink} className="btn btn-primary">
            Click me!
          </button>
        </div>

        <div className="col-4 text-center">
          <h3>Updating array of objects</h3>
          <UpdatingArrayOfObjects />
        </div>
      </div>

      <div className="row">
        <hr />
        <div className="col-6 mb-3">
          <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
        </div>

        <div className="col-6">
          <ExpandableText maxChars={250}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vel
            repudiandae exercitationem quibusdam laborum est non quae?
            Temporibus saepe, qui tempore voluptate incidunt mollitia quo eos
            deserunt. Animi ipsa architecto cum alias aperiam eum et reiciendis,
            praesentium consequuntur molestias numquam doloribus laboriosam
            magni, veniam nulla dolore quia, quidem beatae? Ullam unde
            distinctio, itaque animi fugit iusto libero porro dolor incidunt in
            molestiae sequi rem vero veniam ea id quibusdam officiis, deserunt
            odio? Distinctio repellendus labore officia maiores a voluptatum
            rerum optio cupiditate recusandae obcaecati, est ut modi voluptates
            dolore, voluptate repellat fuga. Voluptatum, sit quisquam quod
            doloremque velit dolorem? Modi, pariatur corporis! Tempore quibusdam
            totam distinctio molestias porro nostrum culpa maxime, ipsum unde
            debitis fugiat. Ratione non at ipsum debitis? Cum eaque fugit
            quaerat nemo blanditiis quia voluptatibus, officia illum asperiores
            ipsam excepturi accusamus est aperiam odio placeat, laudantium autem
            in! Quam quod dolorem voluptates in eligendi numquam corrupti unde
            totam iusto sunt laborum commodi rem, illo amet tempora velit.
            Distinctio, inventore. Perspiciatis aspernatur hic, ab fugit eum
            esse, distinctio laboriosam sapiente similique voluptatem
            repellendus commodi aliquid temporibus ullam! Laboriosam tempora
            optio mollitia repellat? Consectetur esse libero sapiente sint
            maiores non deserunt veniam minus quasi voluptatum atque, incidunt
            labore dolor.
          </ExpandableText>
        </div>
      </div>

      <div className="row">
        <hr />

        <div className="col-6">
          <Form />
        </div>

        <div className="col-6">
          <h3>Expenses</h3>

          <Expenses />
        </div>
      </div>

      <div className="row">
        <hr />

        <div className="col-6">
          <h4>Look in console after changing the value of select</h4>
          <select
            className="form-select"
            onChange={(event) => {
              setCategory(event.target.value);
              // alert("changed to: " + event.target.value);
            }}
          >
            <option value=""></option>
            <option value="Chloting">Chloting</option>
            <option value="Household">Household</option>
          </select>
          <ProductList category={category} />
        </div>

        <div className="col-6">
          <FetchingData />
        </div>
      </div>
    </div>
  );
}

export default Practice;
