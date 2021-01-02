import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';

const AdminIndex = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row" style={{ paddingTop: '100px' }}>
                        <div className="col-md-12 pt-3 pb-5" >
                            <div className="text-muted" style={{ fontSize: '4vh'}}>Admin Dashboard</div>
                        </div>


                        <div className="col-md-6 pb-4" >
                            <div className="card" style={{ alignItems: 'center' }}>
                                <div className="card-body">
                                    <Link href="/admin/crud/category-tag">
                                        <a className="text-muted" style={{ fontSize: '2vh', textDecoration: 'none' }}>Create Categories and Tags</a>
                                    </Link>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-6 pb-4">
                            <div className="card" style={{ alignItems: 'center' }}>
                                <div className="card-body">
                                    <a className="text-muted" style={{ fontSize: '2vh', textDecoration: 'none' }} href="/admin/crud/blog">Create Blog</a>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-6 pb-4">
                            <div className="card" style={{ alignItems: 'center' }}>
                                <div className="card-body">
                                    <Link href="/admin/crud/blogs">
                                        <a className="text-muted" style={{ fontSize: '2vh', textDecoration: 'none' }}>Manage Blogs</a>
                                    </Link>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-6 pb-4">
                            <div className="card" style={{  alignItems: 'center' }}>
                                <div className="card-body">
                                    <Link href="/user/update">
                                        <a className="text-muted" style={{ "font-size": '2vh', textDecoration: 'none' }}>Update Profile</a>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default AdminIndex;
