import { useEffect, useState } from 'react'
import axios from 'axios'

import Form from './components/Form'

function App() {
  const [data, setData] = useState(null ?? [])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const res = await axios('http://localhost:3000/api/data', {
        method: 'GET'
      })
      setData([...res.data])
      
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Form data={data} />
    </>
  )
}

export default App
