import React, { Component } from "react";
export const DataContext = React.createContext();
export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Nike Shoes 01",
        src: "https://static.nike.com/a/images/w_1536,c_limit/9de44154-c8c3-4f77-b47e-d992b7b96379/image.jpg",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 23,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
        rating:4.5
      },
      {
        _id: "2",
        title: "Nike Shoes 02",
        src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9f5962a5-6eb6-46d4-b538-130e70618576/downshifter-10-running-shoe-CrpbbD.png",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 19,
        colors: ["red", "crimson", "teal"],
        count: 1,
        rating:3
      },
      {
        _id: "3",
        title: "Nike Shoes 03",
        src: "https://5.imimg.com/data5/UP/DR/WO/SELLER-10420561/nike-air-max-270-sports-running-shoes-500x500.jpeg",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 50,
        colors: ["lightblue", "white", "crimson", "teal"],
        count: 1,
        rating:4
      },
      {
        _id: "4",
        title: "Nike Shoes 04",
        src: "https://assets.ajio.com/medias/sys_master/root/hab/h9a/13499043479582/-1117Wx1400H-460345245-white-OUTFIT.jpg",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 15,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
        rating:4.7
      },
      {
        _id: "5",
        title: "Nike Shoes 05",
        src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/66fbdb6b-18ea-46c0-9c90-54cf3fd4f530/air-max-impact-2-basketball-shoe-WVvckk.png",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 10,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
        rating:4.2
      },
      {
        _id: "6",
        title: "Nike Shoes 06",
        src: "https://media.gq-magazine.co.uk/photos/5f292bb1d1dbc70bb2c2a9e7/master/w_400%2Cc_limit/20200803-nike-01.jpg",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 17,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
        rating:5
      },
    ],
    cart: [],
    total : 0,
    flag:false
  };
//  for adding a product to cart
  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data] });
     
      
    } else {
      
      alert("The product has already been added to the cart.");
    }
  };
  // decrementing the count of the product
  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };
  // incrementing count of product
  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };
  // for removing product from cart
  removeProduct = (id) => {
    if (window.confirm("do you want to delete this item from cart?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getTotal();
      this.setState({flag: false})
    }
  };
  // setting total cost for product 
  getTotal = () =>{
    const {cart}=this.state;
    const res= cart.reduce ((prev,item)=>{
      return prev+ (item.price *item.count);
    },0)
    this.setState({total:res})
  }
  componentDidUpdate(){
    localStorage.setItem('dataCart',JSON.stringify(this.state.cart));
    localStorage.setItem('dataTotal',JSON.stringify(this.state.total));

  }
  componentDidMount(){
    const dataCart=JSON.parse(localStorage.getItem('dataCart'));
    if(dataCart!== null){
      this.setState({cart:dataCart})
    }
    const dataTotal=JSON.parse(localStorage.getItem('dataTotal'));
    if(dataTotal!== null){
      this.setState({total:dataTotal})
    }
  }
  render() {
    const { products, cart ,total,flag} = this.state;
    const { addCart, reduction, increase, removeProduct ,getTotal} = this;
    return (
      <DataContext.Provider
        value={{ products, addCart, cart, reduction, increase, removeProduct ,total,getTotal,flag}}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
