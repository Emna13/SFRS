import React from "react";
import "./Products.css";

const ProductCard = ({ product }) => {
    
  return (
    <div style={{ marginBottom: "40px", marginLeft: "20px" }}>
      <div
        className="flex flex-col justify-between w-76 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer"
        style={{
          backgroundImage: `url(${product.picture})`,
          backgroundRepeat: "no-repeat",
          height: "500px",
        }}
      >
        <div className="flex justify-between items-center ml-4 pr-8">
          <div className="bg-gray-900 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">
            {product.category}
          </div>
          

           <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg> 
        </div>
        <div
          className="bg-white bg-opacity-5 shadow-md rounded-r-xl p-4 flex flex-col"
          style={{ opacity: "0.7" }}
        >
          <h3 className="text-xl font-bold pb-2">{product.title}</h3>
          <p className="truncate text-gray-500 text-sm">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-400 text-m">{product.price} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
