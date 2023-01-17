import React from 'react';
 import "./Blog1to6.css"
import blogs from "../../../../assets/blogData/Blog1to6.js"

const Blog1to6 = () => {
    return (
        <div className='blogSection'>
            {
                blogs.map((data)=>
                <div className='container'>
                    <div className='img'>
                       <img className='img' src={data.img} alt="" /> 
                    </div>
                    <div className='content'>
                        <div>{data.date}</div>
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        <span>Read more</span>
                    </div>
                 </div>
                   
                )
            }
        </div>
    );
};

export default Blog1to6;