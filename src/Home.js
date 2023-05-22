const Home = () => {
    const handleClick = () =>{
        console.log('Hello World!')
    }

    return ( 
        <div className="Home">
            <h2>Home Page</h2>
            <button onClick={handleClick()}></button>
        </div>
     );
}
 
export default Home;