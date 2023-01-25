import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const OneProduct = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [ product, setProduct ] = useState({})

    useEffect = () => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
        .then((res) => {
            setProduct(res.data);
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <div className="d-flex align-items-center justify-content-around product_page">
                <div className="product_image">
                    <img src={product.image} alt="product" className='product_photo' />
                </div>
                <div className='product_info'>
                    <h1>Product Name: {product.title}</h1>
                    <p>Product Description: {product.description}</p>
                    <p>Product Price: ${product.retail}.00</p>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default OneProduct