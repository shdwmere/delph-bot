import React, { useState, useEffect } from "react";
import logo from '../logo.png'


const casa = 'https://m.greenbets.io/sportsbook';

function App() {
  const sinais = ['Opção A', 'Opção B', 'Opção C'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * sinais.length));

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * sinais.length);
      setIndex(randomIndex);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function AtualizarSinal({ index }) {
    return sinais[index];
  }

  return (
    <div className="App flex flex-col justify-center items-center h-screen bg-backgroundSet">
      <div className="flex flex-col justify-center items-center py-8 px-8 bg-gray-800 rounded-3xl">
        <header className="App-header align-middle">
          <img src={logo} alt="logo" className="mx-auto w-44 mb-6" id="logo"></img>
          <p className="text-white font-semibold text-3xl">greenbets.io</p>
        </header>
        <div className="w-11/12 mt-6">
          <hr className="border-2 border-greenbet my-1 opacity-40 w-auto"></hr>
        </div>
        <div className="mt-8 p-8 align-middle bg-green-900 rounded-2xl border-8 border-green-700">
          <h1 className="text-5xl font-semibold text-gray-200">
            Sinal Capturado : <span className="bg-gray-900 rounded-2xl text-5xl p-2 font-bold text-greenbet font-extrabold"><AtualizarSinal index={index} /></span>
          </h1>
        </div>
        <div className="mt-8 mb-3">
          <a className="font-bold text-5xl text-greenbet" href={casa} target="_blank">Jogue agora!</a>
        </div>
      </div>
    </div>
  );
}

export default App;
