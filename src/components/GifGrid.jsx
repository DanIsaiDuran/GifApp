import React, { useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
    
    useEffect(() => {
        getGifs(category);
    }, []);
    

    return (
        <>
            <h3>{ category }</h3>
            
        </>
    )
}

