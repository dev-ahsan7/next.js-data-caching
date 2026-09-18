'use client';
import Image from 'next/image';
import useUser from '../hooks/useUsers';

const ProductCard = ({ product }) => {
  const user = useUser();
  console.log('user from userCard', user);
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image
          className="w-full h-200px object-left"
          src={product.image}
          alt="Shoes"
          width={500}
          height={500}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{product.category}</div>
          <div className="badge badge-outline">{product.brand}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
