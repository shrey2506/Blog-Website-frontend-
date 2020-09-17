import Link from 'next/link';
import renderHTML from 'react-render-html';
import { useState, useEffect, Component } from 'react';
import { listSearch } from '../../actions/blog';
import '../../static/css/styles.css'


import './Search';



const Search = () => {
    const [values, setValues] = useState({
        search: undefined,
        results: [],
        searched: false,
        message: '',

    });

    const { search, results, searched, message } = values;

    const searchSubmit =e=> {
        e.preventDefault();
        
        listSearch({ search}).then(data => {
            setValues({ ...values, results: data, searched: true, message: `${data.length} blogs found` });
        });
    };


    
    const handleChange = e => {
        e.preventDefault();
        // console.log(e.target.value);
        setValues({ ...values, search: e.target.value, searched: false, results: [] });
       
          
 
       
    };
    
    const searchedBlogs = (results = []) => {
        return (
            <div className="jumbotron bg-white ">
                {message && <p className=" text-muted font-italic">{message}</p>}

                {results.map((blog, i) => {
                    return (
                        <div key={i}>
                            <Link href={`/blogs/${blog.slug}`}>
                                <a className="text-primary">{blog.title}</a>
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    };



   

    const searchForm = () => (
        <form onSubmit={searchSubmit}>
            <div className="row">

               <div className="col-md-4 buttonIn">
                    <input id="search" type="search" className="form-control" placeholder="Search blogs" onChange={handleChange} />
                    {/* <button id="search-button"  type="submit">
                            <img style={{width: 20, height: 20}} src='../../static/images/search.png' />
                        </button> */}


                </div> 
               


            </div>

        </form>
    );

    return (
        <div >
            <div className="pl-2 pt-2 pb-2 pr-2">{searchForm()}</div>
 
            {searched && <div > {searchedBlogs(results)} </div>}
        </div>
    );
};

export default Search;