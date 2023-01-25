import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ wholesale, setWholesale ] = useState('')
    const [ retail, setRetail ] = useState('')
    const [ image, setImage ] = useState('')

    const navigate = useNavigate()

    const submitHandler = (e)=> {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/addProduct`, {
            title,
            description,
            wholesale,
            retail,
            image
        }).then((res)=>{
            console.log(res)
            navigate('/productinventory')
        }).catch((err)=>{
            console.log("Caught error on Front end", err)
        })
    }

    return (
        <>
            <form onSubmit={submitHandler} className='col-sm-6 m-4 mx-auto'>
                <label className='form-label'>Title:</label>
                <input type="text" className='form-control' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label className='form-label'>Description:</label>
                <input type="text" className='form-control' value={description} onChange={(e)=>setDescription(e.target.value)}/>
                <label className='form-label'>Whole Sale Price:</label>
                <input type="number" className='form-control'value={wholesale} onChange={(e)=>setWholesale(e.target.value)} />
                <label className='form-label'>Retail:</label>
                <input type="number" className='form-control' value={retail} onChange={(e)=>setRetail(e.target.value)}/>
                <label className='form-label'>Image:</label>
                <input type="text" className='form-control' value={image} onChange={(e)=>setImage(e.target.value)}/>
                <button type="submit" className='btn btn-secondary mt-3'>Create Product</button>
            </form>
        </>
    )
}

export default Create