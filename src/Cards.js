const Cards = ({products, handleClick, handleChange, value}) => {
    
    return (
        <div className="products-container">
            {products.map((product) => (
                <div className='card-item' key={product.id}>
                    <img className="card-image" src={product.img} alt={product.name}/>
                    <p className="card-category">{product.type}</p>
                    <p className="card-title">{product.name}</p>
                    <div className="quantity-add-to-cart-container">
                        <input type="number" min="0" id={product.id} name="quantity" value={value[product.id]} onChange={handleChange} />
                        {<button onClick={() => handleClick(product.id)} key={product.id} className="add-to-cart">Add to cart</button>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards;