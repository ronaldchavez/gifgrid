import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GitExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['Dragon Ball']);

    return (
        <>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category => 
                         <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    )
                }
            </ol>

        </>
    );

};

export default GitExpertApp;