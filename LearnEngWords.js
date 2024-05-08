import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

import  EWordContractt  from './utils/EWordEngContract.json';

import AsyncStorage from '@react-native-async-storage/async-storage';

const ewordEngContract = "0x76d9c26896A069f481efCDe2d3E0C706dAC2A9BB"

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
var Contract = require('web3-eth-contract');

const LearnEngWords = () => {

    const [data1, setData1] = useState([]);
    // const [datacount, setDatacount] = useState([]);
    const [datacount, setDatacount] = useState('');

    useEffect(() => {
        console.log("LearnEngWordslkajsdlfkja");
        Contract.setProvider('wss://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm');
        const contractt = new Contract(EWordContractt.abi, ewordEngContract);
         
        console.log("contract", contractt);

        var result1 = contractt.methods.getEWords().call((error, result1) => {

            console.log("result1", result1.length);
             var data = result1.length;     
         
            const min = Math.ceil(0);
            // max = Math.floor(data.length);
          const max = Math.floor(data);
        
            // return Math.floor(Math.random() * (max - min) + min);
            const dataa =  Math.floor(Math.random() * (max - min) + min);
            console.log("random_int", dataa)
    
                    var result = contractt.methods.getEWords1(dataa).call((error, result) => {
              console.log(result);

              setData1([...result, result])
              //setData1(data)
              // console.log(data);
               console.log("fetchEWords1", result);
              //console.log("fetchEWords1",result[2][2]);
              
      
            //    const data_count = result.length;
            //    console.log("data_count", data_count);
         
         
               //    setDatacount([...data_count, data_count]);
            //    console.log("datacount", datacount[0]);

            //  setDatacount();
            //  console.log("datacount", datacount);
           
            // AsyncStorage.setItem('data_count',data_count);

//            AsyncStorage.setItem('data_count', JSON.stringify(data_count));

            // const datacount = async () => {
            //     let value = await AsyncStorage.getItem('data_count');
            //     console.log("value", value);
            // }


            //   const setdata = async () => {
            //     try {
            //         AsyncStorage.setItem('data_count',data_count);
            //         getdatacount();
            //     } catch (error) {
            //         console.log("error",error)
            //     }
            //   }

                // const getdatacount = async () => {
               
                //   try {
                //     const value = await AsyncStorage.getItem('data_count')
                //     console.log("async_storage", value);
 
                //   } catch (error) {
                //     console.log("error",error);
                //   }
               
                //   //  return value;
                // }

              //  console.log(getdatacount);
            //    try {
            //     const value = await AsyncStorage.getItem('data_count')
            //     console.log("async_storage", value);
                 
            //    } catch (error) {
            //     console.log("error", error);
            //    }
            //   localStorage.setItem("datacount", JSON.stringify(data_count))


            //    const storage = async (data_count) => {

            //     AsyncStorage.setItem('data_count',data_count);
            //    try {
            //     const value = await AsyncStorage.getItem('data_count')
            
            //      return value;

            //    }

            


            //   console.log(result[0]);
            //   console.log(result[1]);
          });
    
        //     var result = contractt.methods.getEngWordPlWord(dataa).call((error, result) => {
        //       console.log(result);
        //       console.log(result[0]);
        //       console.log(result[1]);
        //   });
          
    
        });

    




    },[])

    return (
        <View>
            <Text>LearnEngWords</Text>
        </View>
    )
}

export default LearnEngWords;