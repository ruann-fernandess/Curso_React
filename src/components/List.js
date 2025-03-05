import Item from './Item'

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Audi" ano_lançamento={1971}/>
                <Item marca="Bugatti" ano_lançamento={1998}/>
                <Item/>
            </ul>
        </>
    )
}

export default List 