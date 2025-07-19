import React, { use, useEffect,useState } from 'react'

function Github() {
  const[data,setData] = useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/codemohit21')
    .then(response=>response.json())
    .then(data=>setData(data))
  },[])

  return (
    
      <div className='text-center text-2xl sm:text-5xl py-10 font-medium bg-gray-100'>
      GitHub Followers : {data.followers}
      <img className='text-center' src={data.avatar_url} alt="Git picture" width={300}/>
      </div>
    
  )
}

export default Github
