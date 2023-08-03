import FoodGrid, { FoodItem } from './components/FoodMenu'
import FlightForm from './components/SearchPanel'

import food1 from './assets/foodItems/Food1.png';
import food2 from './assets/foodItems/Food2.png';
import food3 from './assets/foodItems/Food3.png';
import food4 from './assets/foodItems/Food4.png';
import food5 from './assets/foodItems/Food5.png';
import food6 from './assets/foodItems/Food6.png';


const mockFoodItems:FoodItem[] = [
  {
    id:'1',
    name:'Dish 1',
    price:12.2,
    imageUrl:`${food1}`
  },
  {
    id:'2',
    name:'Dish 2',
    price:12.2,
    imageUrl:`${food2}`
  },
  {
    id:'3',
    name:'Dish 3',
    price:12.2,
    imageUrl:`${food3}`
  },
  {
    id:'4',
    name:'Dish 4',
    price:8,
    imageUrl:`${food4}`
  },
  {
    id:'5',
    name:'Dish 5',
    price:43.50,
    imageUrl:`${food5}`
  },
  {
    id:'6',
    name:'Dish 6',
    price:18.99,
    imageUrl:`${food6}`
  },

]

function App() {

  return (
    <>
      <FlightForm onSubmit={() => alert('clicked!!')}></FlightForm>
      <FoodGrid foodItems={mockFoodItems}></FoodGrid>
    </>
  )
}

export default App
