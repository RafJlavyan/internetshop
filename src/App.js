import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import FullItem from "./components/FullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {id:1,
          title:'HP 17.3 Core i5',
          img: 'hp17.jpg',
          desc: 'lorem ispum dolor sit amet',
          category: 'Notebooks',
          price: '205000'
        },
        {id:2,
          title:'Apple iPhone 11',
          img: 'appleIphone11.jpg',
          desc: 'lorem ispum dolor sit amet',
          category: 'Phones',
          price: '208050'
        },
        {id:3,
          title:'Apple MacBook Air 15 M2',
          img: 'macbookair15.jpg',
          desc: 'lorem ispum dolor sit amet',
          category: 'Notebooks',
          price: '719910 '
        },
        {id:4,
          title:'Apple iPad Pro 11 M2',
          img: 'appleIpadPro11.jpg',
          desc: 'lorem ispum dolor sit amet',
          category: 'Tabs',
          price: '432900'
        },
        {id:5,
          title:'Haier 65 Smart TV AX Pro',
          img: 'tvHaier.jpg',
          desc: 'lorem ispum dolor sit amet',
          category: 'TV-s',
          price: '445000'
        },
        {id:6,
          title:'PS5 PlayStation 5 ',
          img: 'ps5.jpg',
          desc: 'lorem ispum dolor sit amet',
          category: 'Consoles',
          price: '316000'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render() {
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
      {this.state.showFullItem && <FullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
      <Footer />
    </div>
  );
  }

  onShowItem(item) {
    this.setState({fullItem:item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems:this.state.items})
      return
    }
    this.setState({currentItems: this.state.items.filter(d => d.category === category)})
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(d => d.id !== id)})
  }

  addToOrder(item) {
    this.setState({orders: [...this.state.orders,item]},)
  }

}

export default App;
