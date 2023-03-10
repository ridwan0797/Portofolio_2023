import React, { useEffect, useState } from 'react';
import { styleReset } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Layout from './layout/Layout.js';
import Content from './pages/Content';
import Header from './layout/Header.js';
import './App.css';

/* Pick a theme of your choice */
// import original from 'react95/dist/themes/original';
import millenium from 'react95/dist/themes/millenium';

/* Original Windows95 font (optional) */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import { Loading } from './pages/Loading.js';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  
  return (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={millenium}>
      <div className="App">
          {
            loading ? 
            <Loading className='h-full w-full' />
            :
            <Layout loading={loading} top={<Header />} content={<Content />} />
          }
      </div>
    </ThemeProvider>
  </div>
)};

export default App;