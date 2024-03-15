import './App.css';
import FirstTable from './Component/FirstTable';
import SecondTable from './Component/SecondTable';

function App() {
  return (
    <div className='home'>
      <div className='top'></div>
      <div className='body'>
        <span className='title'>상품 등록</span>
        <div className='container'>
          <div className='content'>
            <FirstTable g1='대분류' g2='' g3='중분류' g4='' g5='상품코드' g6='상품명'/>
            <SecondTable g1='판매상태' g2='판매단가' g3='과세구분' g4='재고단위' g5='발주단위' g6='재고환산'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
