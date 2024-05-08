import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';

import  EWordContractt  from './utils/EWordEngContract.json';

//import { FlatList } from 'react-native-gesture-handler';

const ewordEngContract = "0x76d9c26896A069f481efCDe2d3E0C706dAC2A9BB"

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
var Contract = require('web3-eth-contract');


const EngWordss = () => {

    const [engwords, setEngwords] = useState([]);

    useEffect(() => {

        Contract.setProvider('wss://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm');
    const contractt = new Contract(EWordContractt.abi, ewordEngContract);         
    console.log("engwordss_contract", contractt);

        console.log("EngWordss----");
        getewordss();

    }, [])

    Contract.setProvider('wss://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm');
    const contractt = new Contract(EWordContractt.abi, ewordEngContract);         
    console.log("engwordss_contract", contractt);


    const getewordss = async() => {

       // wordid = 0;

        return (

            // contractt.methods.getEWords(wordid).call((error, result) => {
                contractt.methods.getEWords().call((error, result) => {    

                let engword_explained = "";
                // console.log("ewords_result--", result[0]);
                // console.log("ewords_result--", result[0]);
                console.log("ewords_result--", result[0]);
                // setEngword_array([...engword_array, result]);
               
            //  setEngword_array(result);
                setEngwords(result)
                //  console.log("engword_array--", engword_array);
                console.log("engwords--", engwords);
    
               //// setEngword_Explained(result);
               //// console.log("engword_explained--", engword_explained);
               
               
                // engword_explained = result[0];
               
               ///// engword_explained = result;
               
                // setEngword_Explained(result[0]);
                // setEngword_Explained(engword_explained);
                //setEngword_Explained(result);
               
               ///// console.log("engwordexplained_result", engword_explained);
    
            })
        )
    }



    return (
        // <View>
        //     <Text>EngWordss</Text>
        // </View>

        <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>LearnEngWordss</Text>
        {/* <Text>{ engword }</Text> */}


        <FlatList 
        data={engwords}
        renderItem={({item}) => (
            <View style={styles.item}>
                {/* <TouchableOpacity onPress={()=> pressHandler(item.engword_explained)}><Text>{item.id}{item.engword_explained}</Text></TouchableOpacity> */}
                <TouchableOpacity><Text>{item.id}{item.engword}</Text></TouchableOpacity>

            </View>
        )}
        />
        


    </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
      flex: 40,
    },
    sectionContainer: {
      marginTop: 40,
      paddingHorizontal: 30,
    },
    item: {
      // f6f6f6f
      // backgroundColor: '#f9c2ff',
      backgroundColor: '#b0c4de',
      padding: 40,
      marginVertical: 20,
      marginHorizontal: 16,
    }

});

export default EngWordss;