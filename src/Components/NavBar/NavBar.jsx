
import { FaLink } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TbBottleFilled } from "react-icons/tb";

const NavBar = () => {


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}

                    <div> <h6> <span> <TbBottleFilled /> </span> v5.Blend </h6> </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Send e-gift </a>

                            </li>

                        </ul>

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link" href="#">Take The quiz  <span> <FaLink /> </span>  </a>

                            </li>



                        </ul>

                        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">

                            <li Class="nav-item">
                                <a Class="nav-link" href="#">Social ICON</a>
                            </li>

                        </ul> */}



                        <form className="d-flex" role="search">

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">

                                <li className="nav-item">
                                    <a className="nav-link" href="#"> <IoShareSocial /> </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#"> <FaInstagram /> </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> <FaLinkedin /> </a>
                                </li>


                                <li className="nav-item">
                                    <a className="nav-link" href="#"> <FaFacebookF /> </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#"> <CgProfile /> </a>
                                </li>

                            </ul>

                        </form>




                    </div>
                </div>
            </nav>

        </>


    );
};

export default NavBar;