import { createClient } from '@supabase/supabase-js';
import { Container, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';


// Creación del cliente Supabase
const supabase = createClient('SUPABASE_URL', 'SUPABASE_KEY');

export default function Footer() {
  return (
    <footer>
      <div className="bg-gray-800 py-4 text-gray-400">
        <div className="container px-4 mx-auto">
          <div className="mx-4 grid grid-cols-1 md:grid-cols-2">
            <div className="px-4 my-4 w-full">
              <div className="w-[125px] mb-3">
               
              </div>
              <p className="text-justify">
                Innovatech Industries se dedica a la fabricación de dispositivos electrónicos de consumo. Afrontamos desafíos significativos en nuestras operaciones, como la gestión manual de inventarios y la falta de un sistema centralizado que afecta nuestra eficiencia y calidad de productos. Bienvenidos
              </p>
            </div>

            <div className="grid grid-cols-2">
              <div className="px-4 my-4 w-full sm:w-auto">
                <div>
                  <h2 className="inline-block text-xl pb-4 mb-4 border-b-4 border-teal-600">
                    Company
                  </h2>
                </div>
                <ul className="leading-8">
                  <li>
                    <a href="#" className="hover:text-teal-400">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-teal-400">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-teal-400">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="px-4 my-4 w-full sm:w-auto">
                <div>
                  <h2 className="inline-block text-xl pb-4 mb-4 border-b-4 border-teal-600">
                    Businesses
                  </h2>
                </div>
                <ul className="leading-8">
                  <li>
                    <a href="/business/register" className="hover:text-teal-400">
                      Register a Business Account
                    </a>
                  </li>
                  <li>
                    <a href="/business/login" className="hover:text-teal-400">
                      Administration Portal
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-5 bg-teal-600 text-white">
        <a
          href="#"
          className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-teal-400 hover:border-teal-400"
        >
          {/* Aquí puedes añadir iconos o contenido adicional */}
        </a>
      </div>
      <div className="bg-teal-700 py-4 text-gray-100">
        <Container maxW="95vw" mx="auto">
          <Flex justify="center" alignItems="center">
            <Heading as="h4" size="md">
              Innovatech Industries © {new Date().getFullYear()}
            </Heading>
          </Flex>
        </Container>
      </div>
    </footer>
  );
};
