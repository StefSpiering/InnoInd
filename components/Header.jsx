import { createClient } from '@supabase/supabase-js';
import { Container, Flex, Heading, Box, Link, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import Image from 'next/image';
import { ChevronDownIcon } from '@chakra-ui/icons';

// Creación del cliente Supabase
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="bg-opacity-75 py-5 lg:py-7">
        <Container maxW="95vw" display="flex" justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
            <Heading as="h1" size="lg" ml="4">
              Innovatech Industries
            </Heading>
          </Flex>

          <Flex>
            <div className="me-10">
              <Heading as="h2" size="md">
                Bienvenido al Sistema de Producción
              </Heading>
              <p className="text-gray-300 mt-2">
                Gestiona tus productos y proveedores de manera eficiente.
              </p>
            </div>
          </Flex>

          <Box>
            <Menu>
              <MenuButton as={Link} rightIcon={<ChevronDownIcon />} className="text-white">
                Menú Principal
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link href="/login">Ingreso con clave y usuario</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/register">Registro</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/products">Mantenimiento de Productos</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/suppliers">Mantenimiento de Proveedores</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/transactions">Gestión de Transacciones</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/reports">Consultas y Reportes</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/help">Sección de Ayuda</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/queries">Sección para Consultas</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Container>
      </div>
      <div className="h-4 bg-teal-700"></div>
    </header>
  );
}
