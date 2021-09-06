import React, { useEffect, useState } from 'react';
import './style.css';
import Logo from '../../images/logo/new logo.png';
import { IoIosArrowDown, IoIosCart, IoIosSearch } from 'react-icons/io';
import {
    Modal,
    MaterialInput,
    MaterialButton,
    DropdownMenu
} from '../MaterialUI';
import { useDispatch, useSelector } from "react-redux";
import { login, signout, getCartItems, signup as _signup } from "../../actions";
import Cart from "../UI/Cart";
import { Link } from 'react-router-dom';

/**
* @author
* @function Header
**/

const Header = (props) => {

    const [loginModal, setLoginModal] = useState(false);
    const [signup, setSignup] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    // state cart value
    const cart = useSelector((state) => state.cart);

    const userSignup = () => {
        const user = { firstName, lastName, email, password };
        if (
            firstName === "" ||
            lastName === "" ||
            email === "" ||
            password === ""
        ) {
            return;
        }

        dispatch(_signup(user));
    };

    const userLogin = () => {
        if (signup) {
            userSignup();
        } else {
            dispatch(login({ email, password }));
        }
    };

    const Logout = () => {
        dispatch(signout());
    };

    useEffect(() => {
        if (auth.authenticate) {
            setLoginModal(false);
        }
    }, [auth.authenticate]);

    // useEffect(() => {
    //   dispatch(getCartItems());
    // }, []);

    const renderLoggedInMenu = () => {
        return (
            <DropdownMenu
                menu={
                    // <a className="loginButton" onClick={() => setLoginModal(true)}>
                    //     Login
                    // </a>
                    <div className="widget-header mr-3">
                        <a className="widget-view">
                            <div className="icon-area">
                                <i className="fas fa-1x fa-user-circle"></i>
                                <span className="notify">0</span>
                            </div>
                            <small className="text"> {auth.user.fullName} </small>
                        </a>
                    </div>
                }
                menus={[
                    { label: 'My Profile', href: '', icon: null },
                    {
                        label: "Orders",
                        href: `/account/orders`,
                        icon: null,
                    },
                    { label: 'Wishlist', href: '', icon: null },
                    { label: "My Chats", href: "", icon: null },
                    { label: "Coupons", href: "", icon: null },
                    { label: 'Rewards', href: '', icon: null },
                    { label: 'Gift Cards', href: '', icon: null },
                    { label: "Logout", href: "", icon: null, onClick: Logout }
                ]}
            />
        );
    }

    const renderNonLoggedInMenu = () => {
        return (
            <DropdownMenu
                menu={
                    // <a className="loginButton" onClick={() => setLoginModal(true)}>
                    //     Login
                    // </a>
                    <div className="widget-header mr-3">
                        <a href="#" className="loginButton widget-view"
                            onClick={() => {
                                setSignup(false);
                                setLoginModal(true)
                            }}>
                            <div className="icon-area">
                                <i className="fa fa-user"></i>
                                <span className="notify">0</span>
                            </div>
                            <small className="text"> My profile </small>
                        </a>
                    </div>
                }
                menus={[
                    { label: 'My Profile', href: '', icon: null },
                    {
                        label: "Orders",
                        href: `/account/orders`,
                        icon: null,
                        onClick: () => {
                            !auth.authenticate && setLoginModal(true);
                        },
                    },
                    { label: 'Wishlist', href: '', icon: null },
                    { label: 'Rewards', href: '', icon: null },
                    { label: 'Gift Cards', href: '', icon: null },
                ]}
                firstMenu={
                    <div className="firstmenu">
                        <span>New Customer?</span>
                        <a
                            onClick={() => {
                                setLoginModal(true);
                                setSignup(true);
                            }}
                            style={{ color: "#2874f0" }}
                        >Sign Up</a>
                    </div>
                }
            />
        );
    }

    return (
        <div className="header">
            <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
                <div className="authContainer">
                    <div className="row">
                        <div className="leftspace">
                            <h2>Login</h2>
                            <p>Get access to your Orders, Wishlist and Recommendations</p>
                        </div>
                        <div className="rightspace">
                            <div className="loginInputContainer">
                                {auth.error && (
                                    <div style={{ color: "red", fontSize: 12 }}>{auth.error}</div>
                                )}
                                {signup && (
                                    <MaterialInput
                                        type="text"
                                        label="First Name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                )}
                                {signup && (
                                    <MaterialInput
                                        type="text"
                                        label="Last Name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                )}

                                <MaterialInput
                                    type="text"
                                    label="Email/Mobile Number"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <MaterialInput
                                    type="password"
                                    label="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                // rightElement={<a href="#">Forgot?</a>}
                                />
                                <MaterialButton
                                    title={signup ? "Register" : "Login"}
                                    bgColor="#fb641b"
                                    textColor="#ffffff"
                                    style={{
                                        margin: "40px 0 20px 0",
                                    }}
                                    onClick={userLogin}
                                />
                                <p style={{ textAlign: "center" }}>OR</p>
                                <MaterialButton
                                    title="Request OTP"
                                    bgColor="#ffffff"
                                    textColor="#2874f0"
                                    style={{
                                        margin: "20px 0",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <div className="subHeader">
                {/* <div className="logo">
                    <a href="">
                        <img src={Logo} className="logoimage" alt="" />
                    </a>
                </div> */}
                <div className="col-xl-2 col-lg-3 col-md-12">
                    <Link to="/" className="logo brand-wrap font-weight-bold">
                        <img src={Logo} className="logoimage" alt="" />
                    </Link>
                </div>
                {/* <div style={{
                    padding: '0 10px'
                    }}>
                    <div className="searchInputContainer">
                        <input
                            className="searchInput"
                            placeholder={'search for products, brands and more'}
                        />
                        <div className="searchIconContainer">
                            <IoIosSearch style={{
                                color: '#2874f0'
                            }} />
                        </div>

                    </div>
                </div> */}
                <div className="col-xl-6 col-lg-5 col-md-6">
                    <form action="#" className="search-header">
                        <div className="input-group w-100">
                            <select className="custom-select border-right" name="category_name">
                                <option value="">All type</option>
                                <option value="codex">Special</option>
                                <option value="comments">Only best</option>
                                <option value="content">Latest</option>
                            </select>
                            <input type="text" className="form-control" placeholder="Search here..." />

                            <div className="input-group-append">
                                <button type="submit" class="btn btn-warning">
                                    <i class="fas fa-search-plus"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="rightMenu">

                    {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}

                    <div className="widget-header mr-3">
                        <a href="#" className="widget-view">
                            <div className="icon-area">
                                <i className="fa fa-comment-dots"></i>
                                <span className="notify">0</span>
                            </div>
                            <small className="text"> Message </small>
                        </a>
                    </div>
                    <DropdownMenu
                        menu={
                            <a className="more">
                                <span>More</span>
                                <IoIosArrowDown />
                            </a>
                        }
                        menus={[
                            { label: 'Notification', href: '', icon: null },
                            { label: 'Sell with us', href: '', icon: null },
                            { label: '24x7 Customer Care', href: '', icon: null },
                            { label: 'Advertise', href: '', icon: null },
                            { label: 'Download Our App', href: '', icon: null }
                        ]}
                    />
                    {/* <div>
                        <a href={`/cart`} className="cart">
                            <Cart count={Object.keys(cart.cartItems).length} />
                            <span style={{ margin: "0 10px" }}>Cart</span>
                        </a>
                    </div> */}
                    <div className="widget-header">
                        <a href={`/cart`} className="cart widget-view">
                            <div className="icon-area">
                                <i className="fa fa-shopping-cart"></i>
                                <Cart count={Object.keys(cart.cartItems).length} />
                            </div>

                            <small className="text"> Cart </small>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Header;