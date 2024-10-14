import {useState, useEffect} from 'react'
const Random = () => {
    const [users, setUsers] = useState([])

    const getApi = async () => {
        const apiUrl = await fetch("https://randomuser.me/api/?results=5")
        const response = await apiUrl.json()
        setUsers(response.results)
    }


    useEffect(() =>{
        getApi()
    },[] )

    const render = users.map((item, idx) => {
        return(
            <div key={idx}>
                <div className='random-container'>
                    <img src={item.picture.large} alt="" />
                    <p style={{ textTransform: 'capitalize' }}>{item.gender}</p>
                    <p><span>Name: </span> {item.name.first} {item.name.last} </p>
                    <p><span>Age: </span> {item.dob.age} years old</p>
                    <p><span>Address: </span> {item.location.street.number} {item.location.street.name} {item.location.city} {item.location.state} years old</p>

                </div>
            </div>
        )
    })
  return (
    <div>
        <h1>Fetching Apis Using Async Await</h1>
        {render}
     
    </div>
  )
}

export default Random