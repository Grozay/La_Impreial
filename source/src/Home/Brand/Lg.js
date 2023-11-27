const LG = ({ lgProduct }) => {
    return (
        <div>
            <h1>LG</h1>
            {lgProduct.map(pro => (
                <div>
                    {pro.name}
                    <div> <img src={pro.image[0]} width="10%" alt="img" /></div>
                </div>
            ))}
        </div>
    )
}
export default LG