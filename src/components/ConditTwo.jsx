import React from 'react'


import Form from './Form'
import Animals from './Animals'
import Designers from './Designers'

const ConditTwo = () => {
    let learning = ("amenities")

    if (learning != "amenities"){

    return (
    <div>
      <Form/>
    </div>
  );
}

else if (learning === "amenities") {
    return (
        <div>
            <Designers />
        </div>
    );
}

else if (learning == "amenities") {
    return (
        <div>
            <Designers />
            <Animals/>

        </div>
    );
}

else if (learning === "laptop") {
    return (
        <div>
            
        </div>
    );
}

else {
    return (
        <div> <Animals/></div>
    );
}
 
}

export default ConditTwo
