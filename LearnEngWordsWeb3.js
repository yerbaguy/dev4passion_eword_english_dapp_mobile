import React, { useEffect } from "react";
import { View, Text } from 'react-native';
import Web3 from "web3";
const Tx = require('ethereumjs-tx');

import  EWordContractt  from './utils/EWordEngContract.json';

//import { FlatList } from 'react-native-gesture-handler';

const ewordEngContract = "0x76d9c26896A069f481efCDe2d3E0C706dAC2A9BB"

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
var Contract = require('web3-eth-contract');

// const PUBLIC_KEY = "0x87fbEaC84D5962E8e6488bCEbB96d20bD687D284"
// const PRIVATE_KEY = "0xd6a736bafc7f7a6ec508475555533eae388590c4d16748afee99f615ff7908dd"

const PUBLIC_KEY = "0xA74da19113bC8493b64988B2f87B4f57cd95dfc0"
const PRIVATE_KEY = "d6934e62dfb7cb2b6cb55d2dca0cda826309a9b322e3ce1efa998b65d4209abdd"

const LearnEngWordsWeb3 = () => {


    // const web3 = new Web3(new Web3.providers.HttpProvider(`https://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm`));
    const web3 = new Web3(new Web3.providers.HttpProvider("https://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm"));


    const addresses = web3.eth.getAccounts();
    // const  { address }  = await web3.eth.accounts.privateKeyToAccount('d6a736bafc7f7a6ec508475555533eae388590c4d16748afee99f615ff7908dd')

    useEffect(() => {

     console.log("LearnEngWordWeb3----");
     console.log("address:----", addresses[0]);
     console.log(web3);
     getAddress();
     addWord();

    },[])

    Contract.setProvider('wss://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm');
    const contractt = new Contract(EWordContractt.abi, ewordEngContract);         
    console.log("contract-----", contractt);

    const getAddress = async () => {
           
        const address  = await web3.eth.accounts.privateKeyToAccount('d6a736bafc7f7a6ec508475555533eae388590c4d16748afee99f615ff7908dd')

        console.log(address);
      //  return address;

    }

    const addWord = async () => {

       

            // // await contractt.methods.AddEWord("variety","/vəˈraɪəti/","several different sorts of the same thing").gasEstimate();
            // await contractt.methods.addEWord("variety","/vəˈraɪəti/","several different sorts of the same thing").send({

            //     'from': PUBLIC_KEY
            // });

            // await contractt.methods.AddEWord("variety","/vəˈraɪəti/","several different sorts of the same thing").gasEstimate();
            await contractt.methods.addEWord('variety','/vəˈraɪəti/','several different sorts of the same thing').send({

                'from': PUBLIC_KEY
            });
        


        
        // ///close
        // const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest');
        // const gasEstimate = await contractt.methods.addEWord("variety","/vəˈraɪəti/","several different sorts of the same thing").gasEstimate();


        

        // const tx = {
        //     'from': PUBLIC_KEY,
        //     'to': contractt,
        //     'nonce': nonce,
        //     'gas': gasEstimate,
        //     'data': contractt.methods.addEWord("variety","/vəˈraɪəti/","several different sorts of the same thing").encodeABI()
        // };
        // /////




        // const tx = {
        //     'from': PUBLIC_KEY,
        //     'to': 0xA74da19113bC8493b64988B2f87B4f57cd95dfc0,
        //     'value': 1000000000000000000,
        //     'gas': 30000,
        //    // 'gas': gasEstimate,
        //     'nonce': nonce,
        //     // 'data': contractt.methods.AddEWord("variety","/vəˈraɪəti/","several different sorts of the same thing").encodeABI()
        // };


        // const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);


        // //close
        // const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);

        // signPromise.then((signedTx) => {
        //     web3.eth.sendSignedTransaction(signedTx.rawTransaction, function (err, hash) {

        //         if (!err) {
        //             console.log("The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
        //           } else {
        //             console.log("Something went wrong when submitting your transaction:", err)
        //           }
        //     });

        // }).catch((err) => {
        //     console.log("Promise failed:", err);
        // });
        // //////

      //  await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    
        
    }

    return (
        <View>
            <Text>LearnEngWordsWeb3</Text>
        </View>
    )
}

export default LearnEngWordsWeb3;