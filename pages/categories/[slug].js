import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { singleCategory} from '../../actions/category';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import Card from '../../components/blog/Card';

const Category=({category,blogs,query})=>{

    const head = () => (
        <Head>
            <title>
                {category.name} | {APP_NAME}
            </title>
            <meta name="description" content={`Best programming tutorials on ${category.name}`} />
            <link rel="canonical" href={`${DOMAIN}/categories/${query.slug}`} />
            <meta property="og:title" content={`${category.name}| ${APP_NAME}`} />
            <meta property="og:description" content={`Best programming tutorials on ${category.name}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/categories/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );
    

    const showAllBlogs=()=>{
        if(blogs.length===0){
            return(
                <React.Fragment>
                    <div className="card">
                        <div className="card-body">
                                <div style={{ "font-size": '3vh' }} className="text-muted">No blogs found with  {category.name}</div>
                                <a style={{ "font-size": '3vh' }} href="/">Explore Other Blogs</a>
                        </div>

                    </div>
                    
                </React.Fragment>
            )
        }
       
        else{
            return blogs.map((blog, i) => {
           
                // ()
                return (
                    <article key={i}>
                        <Card blog={blog} />
                        <hr />
                    </article>
                );
            });
        }
       
    }
    return(
        <React.Fragment>
            {head()}
            <Layout>
                <main>
                    <div className="container-fluid text-left pt-5">
                         <header>
                             <div className="col-md-12 pt-2 pb-10">
                                {blogs.length!==0&&<div className="display-3  text-muted pb-2" style={{"font-size": '6vh'}}>{category.name}</div>}
                                {showAllBlogs()}
                                 
                             </div>
                         </header>
                    </div>
                </main>
            </Layout>
        </React.Fragment>
    )
};


Category.getInitialProps=({query})=>{
   return singleCategory(query.slug).then(data=>{
       if(data.error){
           console.log(data.error)
       }
       return {category: data.category, blogs: data.blogs,query}
   })
};

export default Category;