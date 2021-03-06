function Clothes({data}){
    return(
        <div className="products">
            {
                data.map((element=>{
                    const{id, name, searchTerm, price, image} = element;
                    return<div key={id} className="product-card">
                        <img src={image} alt={name} width="400px" height="500px"/>
                        <div className="product-info">
                            <h3>{name}</h3>
                            <h4>$ {price}</h4>

                        </div>

                    </div>
                }))
            }
        </div>
    )
}

export default Clothes;