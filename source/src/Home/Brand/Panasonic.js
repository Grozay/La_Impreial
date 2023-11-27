const Panasonic = ({ panasonicProduct }) => {
    return (
        <div>
            <h1>panasonic</h1>
            {panasonicProduct.map(pro => (
                <div>
                    {pro.name}
                    <div> <img src={pro.image[0]} width="10%" alt="img" /></div>
                </div>
            ))}
        </div>
    )
}
export default Panasonic