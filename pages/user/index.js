import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import Link from 'next/link';

const UserIndex = () => {
    return (
        <Layout>
            <Private>
            <div className="container-fluid" style={{marginLeft: 'auto', marginRight: 'auto', display: 'block' }}>
                    <div className="row">
                        <div className="col-md-12 pt-3 pb-5">
                            <div className="text-muted" style={{"font-size": '5vh'}}>User Dashboard</div>
                        </div>

                      

                        <div className="col-md-6 pb-4">
                            <div className="card">
                                <div className="card-body">
                                    <a className="text-muted" style={{"font-size": '2vh'}} href="/user/crud/blog">Create A Blog</a>
                                </div>
                            </div>
                           
                        </div>

                        <div className="col-md-6 pb-4">
                            <div className="card">
                                <div className="card-body">
                                    <Link href="/user/crud/blogs">
                                       <a className="text-muted" style={{"font-size": '2vh'}}>Manage Blogs</a>
                                    </Link>
                                </div>
                            </div>
                            
                        </div>

                        <div className="col-md-6 pb-4">
                            <div className="card">
                                <div className="card-body">
                                    <Link href="/user/update">
                                        <a className="text-muted" style={{"font-size": '2vh'}}>Update Profile</a>
                                    </Link>
                                </div>
                            </div>
                           
                        </div> 
                    </div>
                </div>
            </Private>
        </Layout>
    );
};

export default UserIndex;