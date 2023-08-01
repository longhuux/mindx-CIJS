import logo from './logo.svg';
import './App.css';
import ItemList from './components/lesson4/ItemList';
import ItemBox from "./components/lesson4/ItemBox";
import SearchList from './components/lesson4/SearchList';

function App() {

  const dataList = ['September', 'November', 'December'];

  const dataBox = [
    { id: 1, province: 'Ha Noi', time: 'Fri 28 Nov 2021', description: 'Hanoi faith and hope. We always waiting for you!', image: 'https://file3.qdnd.vn/data/images/0/2022/10/09/phucthang/hanoi%201.jpg?dpi=150&quality=100&w=870' },
    { id: 2, province: 'Ho Chi Minh', time: 'Tue 28 Nov 2021', description: 'Hanoi faith and hope. We always waiting for you!', image: 'https://lp-cms-production.imgix.net/2021-01/shutterstockRF_718619590.jpg' },
    { id: 3, province: 'Da Nang', time: 'Thu 28 Nov 2021', description: 'Hanoi faith and hope. We always waiting for you!', image: 'https://statics.vinpearl.com/cau-rong-da-nang_1657938152.jpg' },
  ]

  // const books = [
  //   { title: "The Alchemist", author: "Paulo Coelho", year: 1988, price: 10 },
  //   { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, price: 15 },
  //   { title: "1984", author: "George Orwell", year: 1949, price: 20 },
  //   { title: "Brave New World", author: "Aldous Huxley", year: 1932, price: 5 },
  //   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, price: 25 },
  // ];
  // const bookTitlesAndPrices = books.map(book => ({ title: book.title, price: book.price }));


  // const newArr = books.filter(book => { return book.price >5} )
  // console.log(newArr);

  return (
    <div className="App">
      <div className='container'>
        <div className='workshop'>
          <h1>WORK SHOP</h1>
        </div>
        <div className='list'>
          {dataList.map((v, i) => (
            <ItemList index={i} item={v} key={i} />
          ))}
        </div>
        <div className='box'>
          {dataBox.map((v, i) => (
            <ItemBox index={i} item={v} key={i} />
          ))}
        </div>
      </div>
      <SearchList/>
    </div>
    
  );
}

export default App;