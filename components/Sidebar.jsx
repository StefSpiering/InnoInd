import { Box, VStack, Link, Text, Menu, MenuButton, MenuList, MenuItem, Divider } from '@chakra-ui/react';
import NextLink from 'next/link';

const Sidebar = () => {
  return (
    <Box
      as="nav"
      width="250px"
      bg="gray.900"
      color="white"
      p={4}
      h="100vh"
      boxShadow="lg"
      borderRight="1px"
      borderColor="gray.700"
    >
      <VStack spacing={6} align="stretch">
        {/* Logo */}
        <Box textAlign="center" mb={6}>
          <Text fontSize="2xl" fontWeight="bold">Innovatech</Text>
          <Text fontSize="sm" color="gray.400">Industries</Text>
        </Box>
        <Divider borderColor="gray.700" mb={6} />

        {/* Mantenimiento de tablas */}
        <Menu>
          <MenuButton
            as={Link}
            p={3}
            borderRadius="md"
            _hover={{ bg: "gray.700" }}
            _active={{ bg: "gray.600" }}
            display="flex"
            alignItems="center"
            fontWeight="semibold"
          >
            <Text flex="1">Mantenimiento de tablas</Text>
          </MenuButton>
          <MenuList bg="gray.800" borderColor="gray.700">
            <MenuItem>
              <NextLink href="/products" passHref>
                <Link>Productos</Link>
              </NextLink>
            </MenuItem>
            <MenuItem>
              <NextLink href="/suppliers" passHref>
                <Link>Proveedores</Link>
              </NextLink>
            </MenuItem>
          </MenuList>
        </Menu>

        {/* Gestión de transacciones */}
        <Menu>
          <MenuButton
            as={Link}
            p={3}
            borderRadius="md"
            _hover={{ bg: "gray.700" }}
            _active={{ bg: "gray.600" }}
            display="flex"
            alignItems="center"
            fontWeight="semibold"
          >
            <Text flex="1">Gestión de transacciones</Text>
          </MenuButton>
          <MenuList bg="gray.800" borderColor="gray.700">
            <MenuItem>
              <NextLink href="/transactions" passHref>
                <Link>Ingreso de transacciones</Link>
              </NextLink>
            </MenuItem>
          </MenuList>
        </Menu>

        {/* Consultas y reportes */}
        <Menu>
          <MenuButton
            as={Link}
            p={3}
            borderRadius="md"
            _hover={{ bg: "gray.700" }}
            _active={{ bg: "gray.600" }}
            display="flex"
            alignItems="center"
            fontWeight="semibold"
          >
            <Text flex="1">Consultas y reportes</Text>
          </MenuButton>
          <MenuList bg="gray.800" borderColor="gray.700">
            <MenuItem>
              <NextLink href="/reports" passHref>
                <Link>Consultas</Link>
              </NextLink>
            </MenuItem>
          </MenuList>
        </Menu>

        {/* Sección de ayuda */}
        <Menu>
          <MenuButton
            as={Link}
            p={3}
            borderRadius="md"
            _hover={{ bg: "gray.700" }}
            _active={{ bg: "gray.600" }}
            display="flex"
            alignItems="center"
            fontWeight="semibold"
          >
            <Text flex="1">Sección de ayuda</Text>
          </MenuButton>
          <MenuList bg="gray.800" borderColor="gray.700">
            <MenuItem>
              <NextLink href="/help" passHref>
                <Link>Documentación de usuario</Link>
              </NextLink>
            </MenuItem>
          </MenuList>
        </Menu>

        {/* Sección para consultas */}
        <Menu>
          <MenuButton
            as={Link}
            p={3}
            borderRadius="md"
            _hover={{ bg: "gray.700" }}
            _active={{ bg: "gray.600" }}
            display="flex"
            alignItems="center"
            fontWeight="semibold"
          >
            <Text flex="1">Sección para consultas</Text>
          </MenuButton>
          <MenuList bg="gray.800" borderColor="gray.700">
            <MenuItem>
              <NextLink href="/queries" passHref>
                <Link>Módulo de consultas</Link>
              </NextLink>
            </MenuItem>
          </MenuList>
        </Menu>

        {/* Ambientación y diseño gráfico */}
        <Menu>
          <MenuButton
            as={Link}
            p={3}
            borderRadius="md"
            _hover={{ bg: "gray.700" }}
            _active={{ bg: "gray.600" }}
            display="flex"
            alignItems="center"
            fontWeight="semibold"
          >
            <Text flex="1">Ambientación y diseño gráfico</Text>
          </MenuButton>
          <MenuList bg="gray.800" borderColor="gray.700">
            <MenuItem>
              <NextLink href="/design" passHref>
                <Link>Diseño de logos y colores</Link>
              </NextLink>
            </MenuItem>
          </MenuList>
        </Menu>
      </VStack>
    </Box>
  );
};

export default Sidebar;
