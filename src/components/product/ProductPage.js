import React from 'react';
import { connect } from 'react-redux';
import { PageContainer } from './style/productPage';
import { formatPrice } from '../../helpers/helpers';

const ProductPage = props => {
    const { products, getProductById } = props;
    const id = parseInt(props.match.params.productId);

    if (products.length === 0) {
        return <h1>Loading...</h1>;
    } else {
        const product = products.filter(product => product.id === id)[0];
        console.log(product);

        return (
            <PageContainer>
                <div className="left">
                    <img src={product.image} alt={product.name} />
                </div>

                <div className="right">
                    <h1>{product.name}</h1>

                    <div className="info-bar">
                        <button>Edible</button>
                        {product.thc ? (
                            <p>
                                <span className="purple"> </span>
                                {`THC: ${product.thc}`}
                            </p>
                        ) : null}
                        {product.cbd ? (
                            <p>
                                <span className="orange"> </span>
                                {`CBD: ${product.cbd}`}
                            </p>
                        ) : null}
                    </div>

                    {product.specs.map(spec => (
                        <div className="add-bar" key={spec.id}>
                            <div className="price">
                                <p>{spec.size}</p>
                                <p>-</p>
                                <p>{formatPrice(spec.price)}</p>
                            </div>

                            <div className="add-to-cart">
                                <i className="fas fa-minus-circle" />
                                <h6>0</h6>
                                <i className="fas fa-plus-circle" />
                            </div>
                        </div>
                    ))}

                    <h4 className="desc-title">Description</h4>
                    <p className="desc-content">{product.description}</p>
                </div>
            </PageContainer>
        );
    }
};

const mapStateToProps = state => {
    return {
        products: state.products.products,
    };
};

export default connect(mapStateToProps)(ProductPage);
