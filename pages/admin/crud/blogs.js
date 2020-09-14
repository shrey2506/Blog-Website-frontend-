import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogRead from '../../../components/crud/BlogRead';
import Link from 'next/link';

const Blog = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <div className="text-muted" style={{"font-size": '6vw'}}>Manage Blogs</div>
                        </div>
                        <div className="col-md-12">
                            <BlogRead />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default Blog;
