import React from 'react';

// import Button from './Button';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      {/* <Button /> */}
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
