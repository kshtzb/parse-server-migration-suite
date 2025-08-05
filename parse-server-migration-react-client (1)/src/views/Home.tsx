import React from 'react';
import { VStack, Heading } from '@chakra-ui/react';
import {useMoralis} from 'react-moralis';

const Home = () => {

  const {Moralis, account} = useMoralis();

  async function food(){
    const Food = Moralis.Object.extend("Food");

    const food = new Food();
    food.set("food", "geda");
    food.set("ethAddress", "0x4");
    await food.save();
  }

  return(
    <VStack alignItems={'start'}>
      <Heading mb={8}>Home</Heading>
      <button onClick={food}>Food</button>
     </VStack> 
  );

};
export default Home;