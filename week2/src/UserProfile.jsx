
function UserProfile(props){
    return(
        <div>
            <img src={props.img} width="300px" alt="user"></img>
            <h1>{props.name}</h1>
            <p>Age:{props.age}</p>
            <p>{props.description}</p>

        </div>
    )
}

export default UserProfile;