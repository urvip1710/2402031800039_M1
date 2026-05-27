
function Hello() {

   const getName = (yourname) => {
     return yourname;
   }
   function onClick() {
     alert("Button Clicked");
   }
   const handleInput = (event) => {
    console.clear();
    console.log("value:", event.target.value);
   }
   const name = "World";
   const namej="Urvi"
   
   return(
    <>
    <h1>Hello, {getName(name)}!</h1>
    <h2>Bye, {getName(namej)}!</h2>
    
    <button onClick={onClick}>Click Me</button>
    <button onClick={() => alert("Hello from inline function!")}>Say Hello</button>
    <br/>
    <input type="text" onChange={handleInput} placeholder="Type something..."/>
    </>
   )
}
export default Hello