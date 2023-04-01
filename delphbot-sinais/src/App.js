const sinais = ['Direita', 'Esquerda', 'Centro'];

function AtualizarSinal() {
  const randomIndex = Math.floor(Math.random() * sinais.length);
  return sinais[randomIndex]
}


function App() {



  return (
    <div className="App flex flex-col justify-center items-center h-screen">
      <header className="App-header align-middle">
        <h1 className="text-7xl font-bold text-maingreen">Delphbot Sinais</h1>
      </header>
      
      <main className="flex flex-col justify-center items-center">
        <div className="mt-16 p-3 align-middle">
            <h1 className="text-4xl font-bold text-maingreen">
              Sinal Capturado : <span className="bg-green-200 rounded-2xl p-2 font-bold text-blue-600">{AtualizarSinal()}</span>
            </h1>
        </div>
      </main>
    </div>
  );
}

export default App;
