

function Hello(props) {

    console.log(props);    
    return (
        <div>
            <input type="text"  onChange={(e) => props.changeName(e.target.value)}/>
        </div>
    );
}

export default Hello;