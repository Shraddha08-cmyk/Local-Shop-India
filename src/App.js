import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import HeadNav from './components/HeadNav/HeadNav';
import HotDealPoster from './components/HotDealPoster/HotDealPoster';
import styled from '@emotion/styled';
import HotDealPrice from './components/HotDealPrice/HotDealPrice';

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
        </div>
      </CssStyle>
    </div>
  );
}

const CssStyle = styled.div`
overflow: hidden;
`;

export default App;
