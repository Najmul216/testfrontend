import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductsBySlug } from '../../../actions';
import { MaterialButton } from '../../../components/MaterialUI';
import Card from '../../../components/UI/Card';
import { generatePublicUrl } from '../../../urlConfig';
import Rating from "../../../components/UI/Rating";
import Price from "../../../components/UI/Price";

const ProductStore = (props) => {

    const product = useSelector(state => state.product);
    const [priceRange, setPriceRange] = useState({
        under5k: 5000,
        under10k: 10000,
        under15k: 15000,
        under20k: 20000,
        under25k: 25000,
        under30k: 30000

    })
    const dispatch = useDispatch();

    useEffect(() => {
        const { match } = props;
        dispatch(getProductsBySlug(match.params.slug));
    }, []);


    return (
        <>
            {Object.keys(product.productsByPrice).map((key, index) => {
                return (
                    <Card //className="card">

                        headerLeft={`${props.match.params.slug} mobiles under ${priceRange[key]} Tk.`}
                        headerRight={
                            <MaterialButton
                                title={"VIEW ALL"}
                                style={{
                                    width: "96px",
                                }}
                                bgColor="#2874f0"
                                fontSize="12px"
                            />
                        }
                        style={{
                            width: "calc(100% - 40px)",
                            margin: "20px",
                        }}
                    >

                        {/* <div className="cardHeader">
                            <div></div>
                            
                        </div> should be removed */}

                        <div style={{ display: 'flex' }}>
                            {
                                product.productsByPrice[key].map(product =>
                                    <Link
                                        to={`/${product.slug}/${product._id}/p`}
                                        style={{
                                            display: "block",
                                            textDecoration: "none",
                                            color: "#000",
                                        }} className="productContainer">
                                        <div className="productImgContainer">
                                            <img src={generatePublicUrl(product.productPictures[0].img)} alt="" />
                                        </div>
                                        <div className="productInfo">
                                            <div style={{ margin: '4px 0' }}>{product.name}</div>
                                            <div>
                                                <Rating value="4.3" />
                                                &nbsp;&nbsp;
                                                <span
                                                    style={{
                                                        color: "#777",
                                                        fontWeight: "500",
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    (3353)
                                                </span>
                                            </div>
                                            <div className="productPrice">BDT. {product.price} Tk.</div>
                                        </div>
                                    </Link>
                                )
                            }

                        </div>
                    </Card>
                );
            })
            }
        </>
    )
}

export default ProductStore;
