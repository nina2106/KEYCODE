import './App.css'

function App() {
   
  const handleSum = (a, b) =>{
    const respuesta = sum(a, b)
    console.log("Respuesta: ", respuesta)
  }


  return (
    <>
      <h1 testid='h1'>Jest Testing</h1>
      <button onClick={() => handleSum(5, 5)}>Sumar</button>
    </>
  )
}

export default App
