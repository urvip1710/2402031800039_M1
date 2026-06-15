function Hello(){
    const hasMessage = true;

    return (
        <div>
            {hasMessage && <p> You have new message!</p>}
        </div>
    )
    //let message;
    //if(isLoggedIn){
    //   message = <h1>Welcome user!</h1>;
    //}else{
    //   message = <h2> Please login</h2>;
    //}
    //return <div> {message} </div>
}
export default Hello

