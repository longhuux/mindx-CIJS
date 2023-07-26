import logo from './logo.svg';
import './App.css';
import ItemList from './components/lesson3/ItemList';
import ItemBox from "./components/lesson3/ItemBox";

function App() {

  const dataList = ['September', 'November', 'December'];

  const dataBox = [
    { id: 1, province: 'Ha Noi', time: 'Fri 28 Nov 2021', description: 'Hanoi faith and hope. We always waiting for you!', image: 'https://file3.qdnd.vn/data/images/0/2022/10/09/phucthang/hanoi%201.jpg?dpi=150&quality=100&w=870' },
    { id: 2, province: 'Ho Chi Minh', time: 'Tue 28 Nov 2021', description: 'Hanoi faith and hope. We always waiting for you!', image: 'https://lp-cms-production.imgix.net/2021-01/shutterstockRF_718619590.jpg' },
    { id: 3, province: 'Da Nang', time: 'Thu 28 Nov 2021', description: 'Hanoi faith and hope. We always waiting for you!', image: 'https://statics.vinpearl.com/cau-rong-da-nang_1657938152.jpg' },
  ]

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
    </div>
  );
}

export default App;