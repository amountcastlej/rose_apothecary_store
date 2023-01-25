import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Products = () => {

    const [ list, setList ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/allProducts')
        .then((res) => {
            console.log(res)
            setList(res.data)
        }).catch((err) => {
            console.log(err)
        })
    })

    return (
        <>
            <div className="d-flex product_section mx-auto">
                {
                    list.map((product) => (
                        <div className=" product_card mt-4">
                            <img src={product.image} alt="product" className='card_photo' />
                                <p>Name: {product.title}</p>
                                <p>{product.description}</p>
                                <p>Price: ${product.retail}.00</p>
                            <Link to={`/oneProduct/${product._id}`}>More Info</Link>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Products