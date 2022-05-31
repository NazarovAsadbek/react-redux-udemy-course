import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDo from "./components/app";

const App = () => {
  return (
    <div>
      <ToDo/>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
