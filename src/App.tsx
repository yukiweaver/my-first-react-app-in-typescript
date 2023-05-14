import React from 'react';
import Counter from './Counter';
import CounterWithReducer from './CounterWithReducer';

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <Counter />
      <CounterWithReducer />
    </div>
  );
};

App.defaultProps = {
  message: 'Hello, defaultProps!',
}

export default App;
