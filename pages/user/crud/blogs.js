import Layout from '../../../components/Layout';
import Private from '../../../components/auth/Private';
import BlogRead from '../../../components/crud/BlogRead';
import {isAuth} from '../../../actions/auth';
import Link from 'next/link';

const Blog = () => {
     const username=isAuth() && isAuth().username;

    return (
        <Layout>
            <Private>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-4 pb-4">
                            <div className="text-muted" style={{"font-size": '5vh'}}>Manage Blogs</div>
                        </div>
                        <div className="col-md-12">
                            <BlogRead username={username} />
                        </div>
                    </div>
                </div>
            </Private>
        </Layout>
    );
};

export default Blog;
