import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: 'Пицца 1',
          img: '/images/',
          desc: 'Описание пиццы 1',
          category: 'pizzas',
          price: '20 BYN'
        },
        {
          id: 2,
          title: 'Пицца 2',
          img: '',
          desc: 'Описание пиццы 2',
          category: 'pizzas',
          price: '25 BYN'
        },
        {
          id: 3,
          title: 'Пицца 3',
          img: '',
          desc: 'Описание пиццы 3',
          category: 'pizzas',
          price: '22 BYN'
        },
        {
          id: 4,
          title: 'Сок 1',
          img: '',
          desc: 'Описание сока 1',
          category: 'drinks',
          price: '3 BYN'
        },
        {
          id: 5,
          title: 'Вода',
          img: '',
          desc: 'Описание воды',
          category: 'drinks',
          price: '2 BYN'
        }

      ]
    }
  }
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
