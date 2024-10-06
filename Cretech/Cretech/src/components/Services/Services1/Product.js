import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="col-6 col-xl-4 c prods__tile">
      <a className="product" href={product.link}>
        <div className="product__pic">
          <img
            className="img--not-wide"
            src={product.imageUrl}
            alt={product.name}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="product__copy">
          <div className="prods__info product__category">{product.category}</div>
          <h4 className="product__h">{product.name}</h4>
          <div className="hide show-lg">{product.description}</div>
          <div className="flx flx-ww gap-s middle product__tags">
            {product.tags.map((tag, index) => (
              <div className="prop-tag" key={index}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        {product.isNew && (
          <div className="btn btn--fill btn--dark btn--main-2 btn--skew newtag newtag--large">
            New
          </div>
        )}
      </a>
    </div>
  );
};

export default Product;
