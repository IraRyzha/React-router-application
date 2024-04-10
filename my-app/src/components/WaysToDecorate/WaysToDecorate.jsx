import './WaysToDecorate.scss'
import furniture from './desktop-image-hero-1.jpg'
import arrow from './icon-arrow.svg'
import angleRight from './icon-angle-right.svg'
import angleLeft from './icon-angle-left.svg'
import { useEffect, useState, useRef } from 'react'


function WaysToDecorate() { 
    const [post, setPost] = useState({})
    const [postNumber, setPostNumber] = useState(1)
    const [loading, setLoading] = useState(true)
    const buttonLeft = useRef(null);

    useEffect(() => {  
        const fetchPosts = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber}`);
            const data = await response.json();
            setPost(data)
            setLoading(false) 
        }
        fetchPosts();
    }, [postNumber])

    const changePostNumber = (side) => {
        setLoading(true)
        buttonLeft.current.style.backgroundColor = 'black';
        switch (side) {
            case 'left':
                if (postNumber <= 1) {
                    setLoading(false) 
                    buttonLeft.current.style.backgroundColor = 'red';
                } else {
                    setPostNumber(postNumber - 1)
                }
                break;
            case 'right': 
                setPostNumber(postNumber + 1)
                break;
            default:
                break;
        }
    }

    return ( 
    <div className='ways-to-decorate'>
        <img src={furniture} alt="furniture" className="furniture" />
        <div className="ways-section">
            {loading && <span className='loading'>Loading...</span>}
            {!loading && <div className='ways'>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <button className='shop-now'><a href="#">Shop now</a><img src={arrow}/></button>
            </div>}
            <div className="control-buttons"> 
                <button ref={buttonLeft} onClick={() => changePostNumber('left')} ><img src={angleLeft}/></button>
                <button onClick={() => changePostNumber('right')} ><img src={angleRight}/></button>
            </div>
        </div>
    </div>
    )
}

export default WaysToDecorate;