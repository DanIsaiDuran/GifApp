import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One punch' ]);

    const onAddCategory = ( newCategory ) => {

        if( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories]);
    }

    return (
        <>
            {/* titulo */}

            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ onAddCategory }
            />

            {/* Listado de gifs */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}
            
            { categories.map( category => (
                    <GifGrid key={category} category={category}/>
                ))
            }
                
            {/* Gif item */}

        </>
    )
}


