import Layout from './layout/Layout.js';
import Header from './layout/Header.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout top={<Header />} />
    </div>
  );
}


export default App;
