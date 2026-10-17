import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function DevLib() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  return (
    <div>
      <p>Welcome to the development library, where a new version of this webpage is pushed on a week by week basis</p>
      <button onClick={() => navigate('/')}>Week One</button>
    </div>
  )
}

export default DevLib