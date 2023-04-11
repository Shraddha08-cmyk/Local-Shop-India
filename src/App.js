import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import HeadNav from './components/HeadNav/HeadNav';
import HotDealPoster from './components/HotDealPoster/HotDealPoster';
import styled from '@emotion/styled';
import HotDealPrice from './components/HotDealPrice/HotDealPrice';
import ElectronicDeal from './components/ElectronicDeal/ElectronicDeal';

function App() {
  return (
    <div className="App">
      <CssStyle>
        <div>
          <Navbar />
          <Header />
          <HeadNav />
          <HotDealPoster />
          <HotDealPrice />
          <ElectronicDeal />
        </div>
      </CssStyle>
    </div>
  );
}

const CssStyle = styled.div`
overflow: hidden;
`;

export default App;
