import Item1 from '../assets/images/item1.jpeg'
import Item2 from '../assets/images/item2.jpeg'
import Item3 from '../assets/images/item3.jpeg'
import Item4 from '../assets/images/item4.jpeg'
import Item5 from '../assets/images/item5.jpeg'
import Item6 from '../assets/images/item6.jpeg'


const initialState = {
  items: [
    // {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
    // {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
    // {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
    {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
    {id:5,title:'Cropped-shoe', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
    {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6}
],

}

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_ITEMS":
      return state;
    default: 
      return state;
  }
};

export default cartReducer;