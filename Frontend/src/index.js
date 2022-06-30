import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './components/context/context';
import {ValidatedLoginForm} from './components/ValidateLoginForm';

//<ValidatedLoginForm />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
         <App />

    </Provider>
   

);

function Application() {
  return (
    <div className="App">
      <h1>Validated Login Form</h1>
      <ValidatedLoginForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

