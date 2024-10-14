// import React, { useState } from 'react';
// import data from '../consumables/birthday';
// import { set } from 'react-hook-form';

// const Birthday = () => {
//   const [users, setUsers] = useState(data); 

//   const image = {
//     height: "200px",
//     width: "300px"
//   };

//   const innerContainer = {
//     textAlign: "center",
//     marginBottom:"2%"
//   };

//   const remove = (id)=>{
//     let removedUser = users.filter(user=> user.id === id)
//     setUsers(removedUser)
//   }


//   const renderUsers = users.map((user, idx) => {
//     return (
//       <div key={idx}>
//         <div style={innerContainer}>
      
//           <img src={user.imageUrl} alt="image" style={image} />
//           <p>Name: <span style={{ fontStyle: "italic" }}>{user.name}</span></p>
//           <p>Age: <span style={{ fontStyle: "italic" }}>{user.age}</span></p>
//           <button onClick={()=>remove(item.id)}>x</button>
//         </div>
//       </div>
//     );
//   });

//   return (
//     <div>
//       <h1 style={{textAlign:"center"}}>{users.length} People Having Birthday</h1>
//       {renderUsers}
//     </div>
//   );
// };

// export default Birthday;
import React, { useState } from 'react';
import data from '../consumables/birthday';

const Birthday = () => {
  const [users, setUsers] = useState(data); 

  const image = {
    height: "200px",
    width: "300px"
  };

  const innerContainer = {
    textAlign: "center",
    marginBottom: "2%"
  };

  // Function to remove a user by ID
  const remove = (id) => {
    let remainingUsers = users.filter(user => user.id !== id); // Filter out the user with matching id
    setUsers(remainingUsers); // Update state
  };

  // Map over the users array and return JSX for each user
  const renderUsers = users.map((user, idx) => {
    return (
      <div key={user.id} style={innerContainer}>
        <img src={user.imageUrl} alt="image" style={image} />
        <p>Name: <span style={{ fontStyle: "italic" }}>{user.name}</span></p>
        <p>Age: <span style={{ fontStyle: "italic" }}>{user.age}</span></p>
        <button onClick={() => remove(user.id)}>x</button> {/* Corrected to use user.id */}
      </div>
    );
  });

  return (
    <div>
      {/* <h1 style={{ textAlign: "center" }}>{users.length} People Having Birthday</h1> */}
      

<h1 style={{ textAlign: 'center' }}>
                {users.length === 1
                    ? '1 person having birthday'
                    : `${users.length} people having birthdays.,` }
            </h1>
            {renderUsers}
    </div>
  );
};

export default Birthday;
