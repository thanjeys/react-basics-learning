
const ProductHeader = () => {

    return (
        <thead>
            <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Action</td>
            </tr>
        </thead>
    )
}

function Product({productData, removeData}) 
{
    console.log(productData);
   
    return (

        <>
        <table className="table">
            <ProductHeader />
            <tbody>
            {
                productData.map((product, i) => {
                    return (
                        <tr key={i}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><button className="btn btn-primary" onClick={() => removeData(i)}>Delete</button></td>
                        </tr>)
                })
            }
            </tbody>
        </table>
       
        </>
    );
}
export default Product;