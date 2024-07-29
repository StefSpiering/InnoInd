import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Container, Heading, Box, Button, Input, FormControl, FormLabel } from '@chakra-ui/react';

// Creación del cliente Supabase
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      const { user, error: signupError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signupError) {
        throw signupError;
      }

      // Insert additional user info into the 'users' table
      const { error: insertError } = await supabase
        .from('users')
        .insert([{ email, first_name: firstName, last_name: lastName, supabase_id: user.id }]);

      if (insertError) {
        throw insertError;
      }

      console.log('User registered successfully');
      // Redirect or perform some action after registration
    } catch (error) {
      setError(error.message);
      console.error('Error registering:', error.message);
    }
  };

  return (
    <Container maxW="sm" py={12}>
      <Box bg="white" p={8} boxShadow="lg" borderRadius="md">
        <Heading as="h2" size="lg" mb={4}>
          Registrarse
        </Heading>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <FormControl id="first_name" mb={4}>
          <FormLabel>Nombre</FormLabel>
          <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </FormControl>
        <FormControl id="last_name" mb={4}>
          <FormLabel>Apellido</FormLabel>
          <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </FormControl>
        <FormControl id="email" mb={4}>
          <FormLabel>Correo Electrónico</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password" mb={6}>
          <FormLabel>Contraseña</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" onClick={handleRegister}>
          Registrarse
        </Button>
      </Box>
    </Container>
  );
}
