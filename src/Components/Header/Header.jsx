
import { BiCapsule } from "react-icons/bi";
import "./header.css"

import { BiDownArrowCircle } from "react-icons/bi"
import { FaArrowRight } from "react-icons/fa6";

const Header = () => {


    return (

        <>

            <section className="bg-secondary-subtle">

                {/* 1st part */}

                <div className="d-flex justify-content-between p-3 ">

                    <div>
                        <h1 className="header_text">Simplify Your <span className="capsule"> <BiCapsule /> </span> Health <br /> and Well Being  </h1>

                    </div>

                    <div>
                        <h5 className="browse">Browse Libarary <span className="link-logo p-1"> <BiDownArrowCircle /> </span> </h5>
                    </div>
                </div>


                {/* 2nd part  */}

                <div className="container-fluid px-4">
                    {/* <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"> */}


                    <div className="row">

                        <div className="col-3 margin">
                            <button className="button-one"> <FaArrowRight /> Start the Quiz </button>

                            <div className="d-flex gap-4 start-quiz">
                                <h1> 1151 </h1>
                                <div> People completed <br /> the quiz today</div>
                            </div>

                        </div>

                        <div className="card col-6 card">
                            <h5 className="card-title">Received Daily Packs personalized to your unique health needs</h5>
                            <img className="img-fluid" src="https://i.ibb.co/9YpPNz2/firstimage.jpg" alt="" />
                        </div>





                        <div className="col-3 margin">
                            {/* <button className="button-one"> <FaArrowRight /> Start the Quiz </button> */}

                            {/* <div className="d-flex gap-4 start-quiz">
                                <h1> 1151 </h1>
                                <div> People completed <br /> the quiz today</div>
                            </div> */}

                            <div className="mx-5">
                                <img className="img-fluid" src="https://i.ibb.co/mhm2pJv/pg.jpg" alt="" />
                            </div>

                        </div>


                    </div>




                </div >


            </section >


            {/* kk */}



        </>


    );
};

export default Header;