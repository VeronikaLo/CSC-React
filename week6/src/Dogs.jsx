
function Dogs({dog}){
    return(
        <div>
            {
                dog.map((element=>{
                    const{id, image} = element;
                    return <div key={id}>
                        <p>{id}</p>
                        <img src={image} alt ="dog" width="400px"/>
                    </div>
                }))
            }
        </div>

    )
}

export default Dogs;