import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { GetProducts } from './generated/GetProducts';

const GET_PRODUCTS = gql`
query GetProducts {
  products{
    id 
    name
    description 
    price 
    sku
  }
}`


function App() {
  const { data, loading, error } = useQuery<GetProducts>(GET_PRODUCTS)

  return (
    <>
      <div>
        {error ? (<p>Error...<pre>{JSON.stringify(error)}</pre></p>) : null}
        {loading ? (<p>Loading...</p>) : null}
        {data?.products?.map(product => (<li key={product?.id}>{product?.name} - {product?.description}</li>))}
      </div>
    </>
  );
}

export default App;
