import React, { useEffect } from "react";
import { View, Text } from 'react-native';
//const Web3 = require('Web3');
import Web3 from "web3";


const LearnEngWordsWeb3_1 = () => {

    const web3 = new Web3(new Web3.providers.HttpProvider("https://eth-goerli.g.alchemy.com/v3/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm"));
  //  const addresses = await web3.eth.getAccounts();



    useEffect(() => {

        console.log("LearnEngWordWeb3_1");
        console.log(web3);
       // console.log("addresses", addresses[0]);
       getAccounts();
    

    },[])



    const getAccounts = async() => {
        
       const addresses = await web3.eth.getAccounts();
       console.log(addresses[0]);
    }

   

    

    return (

        <View>
            <Text>LearnEngWordsWeb3_1</Text>
        </View>
    )
}

export default LearnEngWordsWeb3_1;