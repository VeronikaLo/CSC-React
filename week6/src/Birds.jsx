

function Birds({bird}){
    return(
        <div>
            {
                bird.map((element=>{
                    const{id, image }= element;
                    return <div key={id}>
                        <p>{id}</p>
                        <img src={image} alt ="bird" width="350px"/>
                    </div>
                }))
            }
        </div>
    )
}

export default Birds;