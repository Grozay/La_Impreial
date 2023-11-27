const Toshiba = ({ toshibaProduct }) => {
    return (
        <div>
            <h1>LG</h1>
            {toshibaProduct.map(pro => (
                <div>
                    {pro.name}
                    <div> <img src={pro.image[0]} width="10%" alt="img" /></div>
                </div>
            ))}
        </div>
    )
}
export default Toshiba