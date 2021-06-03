import React from 'react';
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cartReducer.items);

  let itemsList = items.map(item => {
    return (
      <div className="card" key={item.id}>
        <div className="card-img"> 
          <img src={item.img} alt={item.title}/>
          <span className="card-title">{item.title}</span>
          <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons" onClick={() => console.log("clicked")}>add</i></span>
        </div>

        <div className="card-content">
          <p>{item.desc}</p>
          <p><b>Price: ${item.price}</b></p>
        </div>  
      </div>
    );   
  })
  
  return (
    <div className="container">
      <h3 className="center">Our items</h3>
      <div className="box">
        {itemsList}
      </div>
    </div>
  );
}

export default Home;
