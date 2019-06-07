import React from 'react';
import { connect } from 'react-redux';
import AddItemModule from '../cart/AddItemsModule';
import { PageContainer } from './style/productPage';
import { formatPrice } from '../../helpers/helpers';
import Loading from '../modals/Loading';

const ProductPage = props => {
    const { products } = props;
    const id = parseInt(props.match.params.productId);

    if (products.length === 0) {
        return <Loading />;
    } else {
        const product = products.filter(product => product.id === id)[0];

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

                            <AddItemModule product={product} spec={spec} />
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
