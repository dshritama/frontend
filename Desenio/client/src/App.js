import React from 'react';
import Header from './components/header/header.jsx';
import Callout from './components/callout/callout.jsx';
import About from './components/about/about.jsx';
import Fields from './components/fields/fields.jsx';
import Stats from './components/stats/stats.jsx';
import Grid from './components/grid/grid.jsx';
import Footer from './components/footer/footer.jsx';


function App() {
  return (
    <>
      <link rel="stylesheet" href="https://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.min.css"></link>
      <Header />
      <Callout />
      <About 
        thumbnail = "https://cdn.shopify.com/s/files/1/0609/9461/7535/files/SET_S_OF_3_1024x1024.png?v=1673116123"
      />
      <Fields />
      <hr></hr>
      <Stats />
      <hr></hr>
      <Grid />
      <hr></hr>
      <Footer />

    </>
  );
}

export default App;
