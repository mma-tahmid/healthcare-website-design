import "./product.css"

import { FaArrowCircleRight } from "react-icons/fa";
import { IoContract } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { BiCapsule } from "react-icons/bi";
import { BiSquareRounded } from "react-icons/bi";
import { LuBone } from "react-icons/lu";
import { CiCirclePlus } from "react-icons/ci";
import { GiHerbsBundle } from "react-icons/gi";
import { IoTriangleOutline } from "react-icons/io5";

const Product = () => {
    return (
        <section className="bg-secondary-subtle">

            {/* <div className="row row-cols-1 row-cols-md-3 g-4 pt-3 px-4"> */}
            <div className="row  pt-3 px-4">
                {/* responsive Apply */}
                <div className="col-6 ">
                    <div className="card h-70">

                        <div className="d-flex">
                            <h1 className="pt-1 ps-2">
                                product <br /> Library <FaArrowCircleRight />
                            </h1>

                            <div className="pt-5 ps-5 ms-5">
                                <h5> Build Your own <br /> personalized monthly pack!</h5>
                            </div>

                        </div>

                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <h5 className="card-title">/Library</h5>

                            {/* <div className="card-text">


                            </div> */}

                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Minerals <span className="ps-2"> <IoContract /> </span>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong className="mx-5">Minerals are chemical elements required as an essential nutrient</strong>

                                            <button className="button-prdt"> <FaArrowRight /> Explore </button>
                                        </div>
                                    </div>
                                </div>


                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Vitamins <span className="ps-2"> <BiCapsule /> </span>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong className="mx-5">Minerals are chemical elements required as an essential nutrient</strong>

                                            <button className="button-prdt"> <FaArrowRight /> Explore </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Probiotics <span className="ps-2"> <BiSquareRounded /> </span>
                                        </button>
                                    </h2>

                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong className="mx-5">Minerals are chemical elements required as an essential nutrient</strong>

                                            <button className="button-prdt"> <FaArrowRight /> Explore </button>

                                        </div>
                                    </div>
                                </div>


                                {/* HERBS */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Herbs <span className="ps-2"> <GiHerbsBundle /> </span>
                                        </button>
                                    </h2>

                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong className="mx-5">Minerals are chemical elements required as an essential nutrient</strong>

                                            <button className="button-prdt"> <FaArrowRight /> Explore </button>

                                        </div>
                                    </div>
                                </div>


                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Specialty <span className="ps-2"> <IoTriangleOutline /> </span>
                                        </button>
                                    </h2>

                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong className="mx-5">Minerals are chemical elements required as an essential nutrient</strong>

                                            <button className="button-prdt"> <FaArrowRight /> Explore </button>

                                        </div>
                                    </div>
                                </div>



                            </div>



                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="card h-70 bg-warning bg-gradient">

                        <div className="d-flex justify-content-between mx-4 mt-3">
                            <h4 className="ms-3 mt-3"> Minerals </h4>

                            <div>
                                <button className="button-one"> <FaArrowRight /> Explore Library </button>
                            </div>

                        </div>

                        <div className="card h-70 bg-light bg-gradien mt-5 mx-5">
                            <div className="card-body">

                                <div className="d-flex justify-content-between">
                                    <div><button className="button-one"> Bones </button>  <span> <LuBone /> </span> </div>

                                    <div>
                                        <CiCirclePlus />
                                    </div>

                                </div>
                                <h5 className="card-title"> Calcium Plus D3</h5>


                                <div className="d-flex justify-content-between mt-4">
                                    <div>
                                        <h6> Is this right for you?</h6>
                                    </div>


                                    <div>
                                        <h6> <FaArrowRight /> Start the quiz </h6>

                                    </div>
                                </div>

                                <img src="https://i.ibb.co/xYv4Hkq/updateheadphone.jpg" className="card-img-top img-fluid mx-5" alt="..." />

                            </div>
                        </div>






                    </div>
                </div>
            </div>



        </section >
    );
};

export default Product;