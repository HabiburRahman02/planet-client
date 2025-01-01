import Card from './Card'
import Container from '../Shared/Container'
import { useEffect, useState } from 'react'
import axios from 'axios';

const Plants = () => {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:9000/plants')
      .then(data => {
        setPlants(data.data)
      })
  }, [])
  return (
    <Container>
      <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
        {
          plants.map(plant => <Card
            key={plant._id}
            plant={plant}
          ></Card>)
        }
      </div>
    </Container>
  )
}

export default Plants
