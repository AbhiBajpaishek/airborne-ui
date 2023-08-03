import FlightForm from './components/SearchPanel'

function App() {

  return (
    <>
      <FlightForm onSubmit={() => alert('clicked!!')}></FlightForm>
    </>
  )
}

export default App
