import "./Tours.css"
function Tours(props)
{
    return (<>
            <div className="container">
            <div className="tours">
        {
            props.dataArray.map((item,i)=>{
                return (
                    <div className="tour" key={i}>
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        </div>)
            })
        }
    </div>
            </div>
    </>)
}
export default Tours;