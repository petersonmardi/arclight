import '../Stylesheet/List.css';

function List({listClass, text}) {
    return (
        <div className={listClass}>
            {text}
        </div>
    )
}

export default List;