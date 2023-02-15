import Head from 'next/head'
// import Image from 'next/image'
import { Montserrat } from '@next/font/google'
import { Fraunces } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Flex, HStack, Center, Box, Text, Icon, Heading, Image, VStack } from '@chakra-ui/react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useState, useEffect } from 'react'
import {isMobile} from 'react-device-detect';
// import checkMobile from '@/components/checkMobile'

const mont = Montserrat({weight:['500', '700'], subsets: ['latin'] })
const fraunces = Fraunces({ weight:'700', subsets: ['latin'] })



export default function Home() {
  
  return (
    <>
      <Head>
        <title>Product Preview</title>
        <meta name="description" content="Product Preview | Frontendmentor.io challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={mont.className}>
        {
          isMobile?
          <Box bg="hsl(30, 38%, 92%)"  width='100vw' height='100vh' padding='20px 10px'>
          <VStack borderRadius={10} w='100%' spacing={0} >
            <Image src="/images/image-product-mobile.jpg" width='100%' 
            borderTopLeftRadius={10}
            borderTopRightRadius={10}
             />
            <VStack p={25} bg='white' 
                w='100%'
                color='hsl(228, 12%, 48%)' 
                borderBottomLeftRadius={10}
                borderBottomRightRadius={10}
                spacing='15px'
                justifyContent='left'
                alignItems='left'
                >
              <Text letterSpacing='3px' color='hsl(228, 12%, 48%)' fontSize='11px'>PERFUME</Text>
              <Heading className={fraunces.className}
                    color='hsl(212, 21%, 14%)'
                    lineHeight={1}
                    fontWeight='bolder'
                    mt={0}
                >Gabrielle Essence Eau De Parfum</Heading>
              <Text color='hsl(228, 12%, 48%)' fontSize='11px' lineHeight='18px'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</Text>
              <HStack>
                <Text className={fraunces.className} color='hsl(158, 36%, 37%)' fontSize={26}>$149.99</Text>
                <Text textDecorationLine='line-through' fontSize='10px'>$169.99</Text>
                
              </HStack>
              <Button width='100%' bg='hsl(158, 36%, 37%)' color='white'
                h='40px' border='none' borderRadius={5}
                letterSpacing={1}
                _hover={{bg:'hsl(158, 50%, 20%)'}}
                className={mont.className}
               leftIcon={<AiOutlineShoppingCart />}>
                  <Text fontSize='10px !important' fontWeight='bold'>Add to Cart</Text>
                </Button>
              
            </VStack>
          </VStack>
        </Box>
          :
          <Center bg="hsl(30, 38%, 92%)"  width='100vw' height='100vh'>
          <Flex borderRadius={10} w='470px' >
            <Image src="/images/image-product-desktop.jpg" width={235} height={350}
            borderTopLeftRadius={10}
            borderBottomLeftRadius={10}
             />
            <VStack p={25} bg='white' 
                w='235px' h='350px' 
                color='hsl(228, 12%, 48%)' 
                borderTopRightRadius={10}
                borderBottomRightRadius={10}
                spacing='15px'
                justifyContent='left'
                alignItems='left'
                >
              <Text letterSpacing='3px' color='hsl(228, 12%, 48%)' fontSize='11px'>PERFUME</Text>
              <Heading className={fraunces.className}
                    color='hsl(212, 21%, 14%)'
                    lineHeight={1}
                    fontWeight='bolder'
                    fontSize='26px'
                    pr='20px'
                >Gabrielle Essence Eau De Parfum</Heading>
              <Text color='hsl(228, 12%, 48%)' fontSize='11px' lineHeight='18px'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</Text>
              <HStack>
                <Text className={fraunces.className} color='hsl(158, 36%, 37%)' fontSize={26}>$149.99</Text>
                <Text textDecorationLine='line-through' fontSize='10px'>$169.99</Text>
                
              </HStack>
              <Button width='100%' bg='hsl(158, 36%, 37%)' color='white'
                h='40px' border='none' borderRadius={5}
                letterSpacing={1}
                className={mont.className}
                py='15px'
                _hover={{bg:'hsl(158, 50%, 20%)'}}
               leftIcon={<AiOutlineShoppingCart />}>
                  <Text fontSize='10px !important' fontWeight='bold'>Add to Cart</Text>
                </Button>
                {/* <Box as='button' width='100%' bg='hsl(158, 36%, 37%)' color='white'
                h='40px' border='none' borderRadius={5}
                letterSpacing={1}
                className={mont.className}
               leftIcon={<AiOutlineShoppingCart />}>
                  <Text fontSize='10px !important' fontWeight='bold'>Add to Cart</Text>
                </Box> */}
              
            </VStack>
          </Flex>
        </Center>
        }
        
      </main>
    </>
  )
}
