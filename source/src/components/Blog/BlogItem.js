// import "../../css/Blog/BlogItem.css"
import { useNavigate } from 'react-router-dom';
function BlogItem({ blog }) {
    const navigate = useNavigate();
    return (
        <div className="hover:scale-110  rounded-lg border-4 border-slate-300 blogitem">
            <div className=' blogitem_card' onClick={() => navigate(`/blogdetail/${blog.id}`)}>
                <div className=' m-10 grid grid-rows-2 grid-flow-col gap-4'>

                    <div className='row-span-3'><img className='w-24 h-36' src={blog.image[0]} alt='' /></div>
                    <div className='row-span-2 col-span-2'>
                        <div>
                            <h2 className='text-3xl font-bold'>{blog.name}</h2>
                            <br></br>
                            <h6>{blog.content[0]}</h6>
                            <br></br>
                            <h5 className='blog_detail'><a href='#' > Keep reading ... </a></h5>
                        </div>
                    </div>
                </div>

            </div>
        </div >


    )
}
export default BlogItem;