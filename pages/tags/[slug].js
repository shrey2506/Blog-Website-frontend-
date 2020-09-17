import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { singleTag } from '../../actions/tag';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import Card from '../../components/blog/Card';

const Tag = ({ tag, blogs, query }) => {
    const head = () => (
        <Head>
            <title>
                {tag.name} | {APP_NAME}
            </title>
            <meta name="description" content={`Best programming tutorials on ${tag.name}`} />
            <link rel="canonical" href={`${DOMAIN}/categories/${query.slug}`} />
            <meta property="og:title" content={`${tag.name}| ${APP_NAME}`} />
            <meta property="og:description" content={`Best programming tutorials on ${tag.name}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/categories/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );
     
    // console.log(blogs.length)

    const showAllBlogs=()=>{
        if(blogs.length===0){
            return(
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        <div style={{ "font-size": '3vh' }} className="text-muted">No blogs found with  {tag.name}</div>
                        <a style={{ "font-size": '3vh' }} href="/blogs">Explore Other Blogs</a>
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
   

    return (
        <React.Fragment>
            {head()}
            <Layout>
                <main>
                    <div className="container-fluid text-left pt-5">
                        <header>
                            <div className="col-md-12 pt-3">
                                {blogs.length!==0&&<div className="display-3  text-muted pb-2" style={{ "font-size": '6vh' }}>{tag.name}</div>}
                                {
                                    // blogs.map((b, i) => (
                                    //     <div>
                                    //         <Card key={i} blog={b} />
                                    //         <hr />
                                    //     </div>
                                    // )) 
                                    showAllBlogs()
                                    }
                               
                            </div>
                        </header>
                    </div>
                </main>
            </Layout>
        </React.Fragment>
    );
};

Tag.getInitialProps = ({ query }) => {
    return singleTag(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { tag: data.tag, blogs: data.blogs, query };
        }
    });
};

export default Tag;