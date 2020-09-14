import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { userPublicProfile } from '../../actions/user';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import ContactForm from '../../components/form/ContactForm';

import moment from 'moment';

const UserProfile=({user,blogs, query})=>{

    const head = () => (
        <Head>
            <title>
                {user.username} | {APP_NAME}
            </title>
            <meta name="description" content={`Blogs by ${user.username}`} />
            <link rel="canonical" href={`${DOMAIN}/profile/${query.username}`} />
            <meta property="og:title" content={`${user.username}| ${APP_NAME}`} />
            <meta property="og:description" content={`Blogs by ${user.username}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/profile/${query.username}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:secure_url" ccontent={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );
    
    const showUserBlogs=()=>{
         return blogs.map((blog,i)=>{
             return (
                 <div key={i} className="mt-4 mb-4">
                    <Link href={`/blogs/${blog.slug}`}>
                        <a className="lead">{blog.title}</a>
                    </Link>
                 </div>
             )
         })
    }

    return( 
        <React.Fragment>
            {head()}
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                           <div className="text-muted" style={{"font-size": '4vh'}}>{user.name}</div>
                                           <div className="text-muted" style={{"font-size": '3vh'}}>{user.about}</div>
                                          
                                        </div>
                                        <div className="col-md-4">
                                        <img
                                            src={`${API}/user/photo/${user.username}`}
                                            className="img img-fluid img-thumbnail mb-3"
                                            style={{ maxHeight: '200', maxWidth: '100%' }}
                                            alt="user profile"
                                        />
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>

                <div className="container pb-5">
                     <div className="row">
                         <div className="col-md-12 pb-2 pt-2">
                              <div className="card">
                                  <div className="card-body">
                                        <h5 className="card-title  bg-primary pt-4 pb-4 pl-4 pr-4 text-white" >
                                            Recent blogs by  {user.name}
                                        </h5>
                                        <br/>
                                        {showUserBlogs()}
                                  </div>
                              </div>
                         </div>

                         {/* <div className="col-md-12 pb-2 pt-2">
                             <div className="card">
                                  <div className="card-body">
                                        <h5 className="card-title  bg-primary pt-4 pb-4 pl-4 pr-4 text-white" >
                                        Message {user.name}
                                        </h5>
                                        <br/>
                                        <p><ContactForm  /></p>
                                  </div>
                             </div>
                             
                         </div> */}
                     </div>
                </div>

            </Layout>
        </React.Fragment>
    )
}

UserProfile.getInitialProps=({query})=>{
    
    return userPublicProfile(query.username).then(data=>{
        if(data.error){
            console.log(data.error)
        }
        else{
            
            return {user:data.user, blogs: data.blogs, query};
        }
    });
};

export default UserProfile;