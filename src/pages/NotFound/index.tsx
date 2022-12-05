import { useNavigate } from 'react-router-dom';

import { Box, Text, Button, Flex, Image } from '@chakra-ui/react';
import NotFoundSVG from 'assets/not-found.svg';

export function NotFound() {
  const navigate = useNavigate();
  return (
    <Flex align="center" justify="center" height="100vh" direction={'column'}>
      <Box textAlign="center" py={10} px={6} gap={12}>
        <Image src={NotFoundSVG} alt="Página não encontrada" w={'70vw'} />
      </Box>
      <Flex direction={'column'} align={'center'}>
        <Text fontSize="18px" mb={4}>
          Opa! Parece que a página que você buscou não foi encontrada
        </Text>
        <Button
          variant="origemBlueSolid"
          onClick={() => {
            navigate('/');
          }}
        >
          Voltar para o início
        </Button>
      </Flex>
    </Flex>
  );
}
