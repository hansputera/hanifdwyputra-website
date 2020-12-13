import {
  Link as ChakraLink,
  Text,
  Code,
  Button,
  Flex,
  Heading as ChakraHead,
  Input,
  FormControl,
  FormLabel,
  Kbd
} from '@chakra-ui/react'

import words from "../words.json";
import Head from "next/head";
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import React from 'react';

const Index = () => {
  var sensor: string;
  var objectWord: { clue: string; jawaban: string; };

  function generateAsk() {
  const random = Math.floor(Math.random() * Object.keys(words).length);
  sensor = Object.keys(words)[random];
  objectWord = JSON.parse(JSON.stringify(words))[sensor];
}

  generateAsk();

  let passSo = objectWord!.jawaban;
  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    if (event.target.value.toString().toLowerCase() === passSo) {
      (document.getElementById("kata") as HTMLInputElement).readOnly = true;
     document.getElementById("input")!.innerText = "Jawaban mu benar!";
     setTimeout(() => {
      let count = 10;
      document.getElementById("input")!.innerHTML = "Pertanyaan akan dimulai dalam <kbd class=\"chakra-kbd css-1s0i8vp\">10</kbd> detik!";
      function countTimer() {
        --count;
        document.getElementById("input")!.innerHTML = `Pertanyaan akan dimulai dalam <kbd class="chakra-kbd css-1s0i8vp">${count+1}</kbd> detik`;
      }
      let timeOUT = setInterval(countTimer, 1000);
      setTimeout(() => {
        clearInterval(timeOUT);
        generateAsk();
        while (passSo === objectWord.jawaban.toLowerCase()) generateAsk();
        passSo = objectWord.jawaban;
        (document.getElementById("kata") as HTMLInputElement).readOnly = false;
        (document.getElementById("kata") as HTMLInputElement).value = "";
        document.getElementById("input")!.innerHTML = `Input: ${objectWord!.clue} <kbd class="chakra-kbd css-1s0i8vp">${sensor}</kbd><span role="presentation" aria-hidden="true" class="chakra-form__required-indicator css-lvcu6f">*</span>`;
      }, 10 * 1000);
     }, 3000);
    }
  }


  return (
  <div>
    <Head>
    <title>Welcome to my Next Site</title>
  </Head>
  <Container height="100vh">
    <Hero />
    <Main>
      <Text>
  😄 Halo, nama saya adalah <Code>Hanif Dwy Putra S</Code> saya lahir pada tanggal <Code>24 Maret 2007</Code> di <Code>Sulawesi Tengah, Palu.</Code> berumur {new Date().getFullYear() - 2007}🤔 Kamu mungkin bisa follow dan lihat media sosialku?
      </Text>

      {/* Instagram */}
      <ChakraLink isExternal href="https://instagram.com/hanif.dwy.putra12" flexGrow={1} mx={2}>
        <Button width="100%" variant="solid" colorScheme="red">
          Instagram
        </Button>
      </ChakraLink>
      {/* End Instagram */}

      {/* Telegram */}
      <ChakraLink isExternal href="https://t.me/hanifdwypoetra" flexGrow={1} mx={2}>
        <Button width="100%" variant="solid" colorScheme="blue">
          Telegram
        </Button>
      </ChakraLink>
      {/* End Telegram */}


      {/* Fun Content */}

      <Flex justifyContent="center" alignItems="center" height="15vh">
         <ChakraHead fontSize="5vw">🤣 Fun Games</ChakraHead>
      </Flex>

      <FormControl id="inputWord" isRequired>
      <FormLabel id="input">Input: {objectWord!.clue} <Kbd>{sensor!}</Kbd></FormLabel>
      <Input onChange={handleChange} placeholder="Lengkapi kata yang diatas disini!" id="kata" size="sm" />
      </FormControl>

      {/* End Fun Content */}

      {/* <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink
            isExternal
            href="https://chakra-ui.com"
            flexGrow={1}
            mr={2}
          >
            Chakra UI <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
            Next.js <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List> */}
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>&copy; Hanif Dwy Putra S. <Code>Next</Code> & <Code>Chakra</Code></Text>
    </Footer>
    <CTA />
  </Container>
  </div>
  );
}

export default Index