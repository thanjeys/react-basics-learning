import { useEffect, useState } from "react";

function JsonData()
{
    const [resource, setResource] = useState('posts');

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
        .then(response => response.json())
        .then(json => setItems(json));
    }, [resource]);
    return (
        <>
         <hr />
        <h2>JSON Data</h2>
        <button onClick={() => setResource('posts')}> Posts </button> &nbsp;&nbsp;
        <button onClick={() => setResource('users')}> Users </button> &nbsp;&nbsp;
        <button onClick={() => setResource('comments')}> Comments </button>
        <h4>{resource}</h4>
        {
            // items.map(item => <pre>{JSON.stringify(item)}</pre>)
            <pre>{JSON.stringify(items)}</pre>
        }
        <hr />
        </>
    );
}
export default JsonData;