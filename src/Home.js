import { useState } from "react";


const Home = () => {
   const [name,setName] = useState('Kaan');
   const [age,setAge] = useState(26);
   const handleClick = () =>{
    setName('Test')
    setAge('30')
   }

  return (
    <div className="Home">
      <h2>Home Page</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
