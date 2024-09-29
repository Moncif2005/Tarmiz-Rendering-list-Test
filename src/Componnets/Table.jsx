
const Table = (props) => {
    return(
        <div className="table">
            <h3>{props.title}</h3>
            <div className="line"></div>
            <p>{props.p}</p>
        </div>
    )

}
export default Table;