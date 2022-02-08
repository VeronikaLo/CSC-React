function Item({item, itemImg, itemDescription, itemPrice}){
    return(
        <div>
            <img src={itemImg} alt="item" width="200px" height="170"></img>
            <h3>{item}</h3>
            <p>{itemDescription}</p>
            <p>{itemPrice}</p>
        </div>
    )
}

export default Item