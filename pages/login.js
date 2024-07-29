import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Container, Heading, Box, Button, Input, FormControl, FormLabel } from '@chakra-ui/react';

// Creación del cliente Supabase
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      try {
        const { user, error } = await supabase.auth.signIn({
          email,
          password,
        });
  
        if (error) {
          throw error;
        }
  
        console.log('Usuario autenticado:', user);
        // Aquí podrías redirigir o realizar alguna acción después del inicio de sesión
      } catch (error) {
        console.error('Error al iniciar sesión:', error.message);
      }
    };
  
    return (
      <Container maxW="sm" py={12}>
        <Box bg="white" p={8} boxShadow="lg" borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>
            Iniciar Sesión
          </Heading>
          <FormControl id="email" mb={4}>
            <FormLabel>Correo Electrónico</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password" mb={6}>
            <FormLabel>Contraseña</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button colorScheme="teal" onClick={handleLogin}>
            Iniciar Sesión
          </Button>
        </Box>
      </Container>
    );
  }
  
