import $ from 'jquery';
import { useEffect } from 'react';
function Jquery() 
{
    const jqueryfn = () => {
        $('#clickme').click(function(){
            alert('jquery works')
        });
    }

    useEffect(() => {
        jqueryfn()
    }, [])
    return(
        <>
            <h3>Jquery</h3>
            <p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
            <button id="clickme">Click here</button>
        </>
    )
}
export default Jquery;