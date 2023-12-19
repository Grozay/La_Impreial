import { useParams } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
// import "../../css/Blog/BlogDetail.css";
import React from 'react';
function BlogDetail({ blogs }) {
    const { id } = useParams();
    const blog = blogs.find(blog => blog.id === parseInt(id));
    console.log(blog);
    return (
        <div className="blogdetail_page_container">
            <div className="py-7 flex justify-center">
                <div >
                    <img src={"../" + blog.image[1]} alt='' />
                </div>
            </div>
            <div className="pb-3 text-4xl font-bold flex justify-center ">
                <div className="text-center w-2/3 flex justify-center">
                    <h1>{blog.name}</h1>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-2/3 blogdetail_content">
                    <ul className="text-justify">
                        {blog.content.map((c) => (
                            <li><p>{c}</p></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default BlogDetail;