// import 'bootstrap/dist/css/bootstrap.css';
import BlogItem from './BlogItem';
// import { Pagination } from "react-bootstrap";
// import { useState } from 'react';
import "../../css/Blog/Blog.css";

function Blog({ blogs }) {


    return (<div className="flex justify-center bloglist_page_container">
        <div className=' w-2/3 bloglist container'>
            <div className="bloglist_card_item pt-5">
                {blogs.map(blog => (
                    <div className="pb-5">
                        <BlogItem key={blog.id} blog={blog} />
                    </div>
                ))}
            </div>
            <div className="bloglist_pagination"></div>
        </div>
    </div>
    )
}
export default Blog