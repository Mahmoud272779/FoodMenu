import { Container } from "react-bootstrap";
import UpperNavBar from "./components/UpperNavBar";
import Header from "./components/Header";
import Category from "./Category";
import CardItem from "./CardItem";
import { items } from "./data";
import { useState } from "react";


function App() {
  const [itemsData,setitemsData]=useState(items);
  return (
    <div className="color-body font">
     <UpperNavBar></UpperNavBar>
    <Container>
<Header></Header>
<Category></Category>
<CardItem itemsData={itemsData}></CardItem>
    </Container>

    </div>
  );
}

export default App;
