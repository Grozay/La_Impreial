import '../../css/AboutUs/AboutUs.css'
const AboutUs = () => {
    return (
        <>
            <div className='aboutus'>
                <div>
                    <h1 className="title_aboutus">La Imperial - About us</h1>
                </div>

                {/* phần 1 */}
                <div className='about_list1'>
                    <div >
                        <img src="./data/assets/AboutUs/about_2.png" alt="AboutUs 1" className='img_p1' />
                    </div>
                    <div className='p_p1'>
                        <p>
                            - La Imperial is a company specializing in selling household appliances founded in [year of establishment].
                            With more than 20 years of experience, we are proud to bring customers high quality products, diverse in designs
                            and types, meeting all the needs of Vietnamese families.
                        </p>
                        <p>
                            - Prestige and quality are always the guiding principles in all activities of La Imperial. We always strive to
                            provide customers with genuine, durable products, competitive prices and dedicated, thoughtful customer service.
                        </p>
                        <p>
                            - La Imperial's mission is to bring convenience and comfort to every Vietnamese family. We are committed to
                            providing modern, smart household products, making housework easier and more enjoyable.
                        </p>
                    </div>
                </div>


                {/* phần 2 */}
                <div className='about_list2'>
                    <div className='about_title_p2'>
                        <h2>La Imperial believes:</h2>
                    </div>
                    <hr className='hr' />
                    <div className='p_p2'>
                        <li>
                            <span>Prestige:</span> We always put prestige first, always ensuring the quality of products and services to meet the trust
                            of customers.</li>
                    </div>
                    <div className='about_list2_1'>

                        <div>
                            <img src="./data/assets/AboutUs/about_1.jpg" alt="About_2" className='img_p2' />
                        </div>

                        <div className='p_p2'>
                            <li>
                                <span>Quality:</span> We only provide genuine products with clear origins and international quality standards.
                            </li>

                            <li>
                                <span>Diversity: </span>
                                We have a product system diverse in designs, types, and brands, meeting all customer needs.
                            </li>

                            <li>
                                <span>Competitive prices: </span>
                                We are committed to providing products at reasonable, competitive prices in the market.
                            </li>

                            <li>
                                <span>
                                    Dedicated customer care service:
                                </span>
                                We have a team of professional, enthusiastic staff,
                                always ready to assist customers in the process of purchasing and using products.
                            </li>
                        </div>
                    </div>


                </div>


                {/* phần 3 */}

                <div className='about_list3'>
                    <div className='about_title3'>
                        <h2>
                            To reach more customers and provide information about products quickly and conveniently,
                            in the era of strongly developing internet technology, La Imperial has officially launched its website.
                        </h2>
                        <hr className='hr' />
                        <div className='about_list3_1'>

                            <div className='p_p3'>
                                <p>
                                    On the website, customers can:
                                </p>
                                <p>
                                    <span>Find detailed information about products: </span>
                                    Including images, specifications, features, prices,...
                                </p>
                                <p>
                                    <span>Online ordering: </span>

                                    Customers can easily order products right on the website and receive goods at home.
                                </p>
                                <p>
                                    <span>Contact La Imperial: </span>

                                    Customers can contact us via email, online phone for inquiries and support.
                                </p>
                                <p>
                                    <span></span>

                                    La Imperial believes that the website will be a useful information channel, helping customers access our products more easily and conveniently.
                                </p>
                                <p>
                                    <span></span>

                                    We always want to receive the support of our customers to grow stronger.
                                </p>
                                <p>
                                    <span></span>
                                </p>
                            </div>
                            <div>
                                <img src="./data/assets/AboutUs/about_3.jpeg" alt="About 3" className='img_p3' />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}
export default AboutUs;