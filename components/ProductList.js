import { useEffect, useState } from 'react';
import { Container, Text } from '@chakra-ui/react';
import axios from 'axios';

//const API_URL = '/api/products'; // Ruta para las APIs RESTful en Express

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      //const response = await axios.get(API_URL);
      //setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <Container maxW="container.sm">
      <Text fontSize="xl" fontWeight="bold" mb={4}>Lista de Productos</Text>
      {products.map(product => (
        <Text key={product.id}>{product.name} - {product.description}</Text>
      ))}
    </Container>
  );
};

export default ProductList;
