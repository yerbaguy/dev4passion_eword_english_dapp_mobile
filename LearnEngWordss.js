import React, { useState, useEffect } from "react"
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

import  EWordContractt  from './utils/EWordEngContract.json';

//import { FlatList } from 'react-native-gesture-handler';

const ewordEngContract = "0x76d9c26896A069f481efCDe2d3E0C706dAC2A9BB"

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
var Contract = require('web3-eth-contract');

const LearnEngWordss = () => {

    const [engword, setEngword] = useState(); 
    const [correct_engword_explained, setCorrect_engword_explained] = useState();
    const [engword_array, setEngword_array] = useState([]);

    // Contract.setProvider('wss://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm');
    // const contractt = new Contract(EWordContractt.abi, ewordEngContract);         
    // console.log("contract", contractt);


    useEffect(() => {

        Contract.setProvider('wss://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm');
        const contractt = new Contract(EWordContractt.abi, ewordEngContract);         
        console.log("contract", contractt);

        getewordsresult();
        getewords1result(2);


      //  console.log("LearnEngWordss");

    },[])


    Contract.setProvider('wss://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm');
    const contractt = new Contract(EWordContractt.abi, ewordEngContract);         
    console.log("contract", contractt);

    const getewordsresult = () => {

        let randengword = 0;
    
        return (
            contractt.methods.getEWords().call((error, result) => {

                let wordid = 0
                console.log("result--", result.length);
               //// setEwordsl(result.length);
               // console.log("ewords_l--", ewordsl);
                randengword = random_ewords(result.length);
                geteword(randengword);

                getewords1result(randengword);
               
                // wordid = randengword;
               // wordidd = wordid;
                console.log("randengword", randengword);
              
              
                // setRandEngWord(randengword);
                // console.log("getewords_result_randengword", randengword);

                // let resultt = ewordresult(randengword);
                // console.log("resultt", resultt)




               // let wordid = 2;
               // ewords_result(wordid);
            })
        )
    }

    const geteword = (wordid) => {

        console.log("geteword_wordid", wordid);

        return (

            <View style={styles.sectionContainer}>
                
                {


            contractt.methods.getEngWordEngExplainedAndPronounciation(wordid).call((error, result) => {

                let engword = "";
                console.log("eword_result--", result[0]);
                engword = result[0];
                setEngword(engword);
               
               
                // setEngword_Explained(engword);
               // engword = result[0];
    
                console.log("eword_correct_result--", result[2]);
                let correct_eng_explained = result[2];
                setCorrect_engword_explained(result[2])
                
                
                 //setCorrect_engword_explained(correct_eng_explained);
               
               /////  console.log("setCorrect_engword_explained", correct_engword_explained);
    
            })
        }

            </View>

        )
        
    }

    const getewords1result = (wordid) => {

        wordid = 0;

        return (

            contractt.methods.getEWords1(wordid).call((error, result) => {

                let engword_explained = "";
                // console.log("ewords_result--", result[0]);
                // console.log("ewords_result--", result[0]);
                console.log("ewords_result--", result);
                // setEngword_array([...engword_array, result]);
               
             setEngword_array(result);
                 console.log("engword_array--", engword_array);
    
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


    const random_ewords = (result) => {
        console.log("random_ewords_result_l--", result);

        var data = result;     
     
        const min = Math.ceil(0);
        // max = Math.floor(data.length);
      const max = Math.floor(data);
    
        // return Math.floor(Math.random() * (max - min) + min);
        const dataa =  Math.floor(Math.random() * (max - min) + min);

        console.log("random_ewords_dataa--", dataa);

       
        //eword_result(dataa);
       
        //// ewordresult(data);

        return dataa;
       // ewordresult(dataa);

    }

    const pressHandler = (item) => {

        let result

        console.log("item", item);
        // console.log("correct_engword_explained", correct_engword_explained);
         console.log(item===correct_engword_explained);
              
        if (item===correct_engword_explained) {
            console.log("OK")
            getewordsresult();
        } else {
            console.log("NO")
        }

    }





    return (

        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>LearnEngWordss</Text>
            <Text>{ engword }</Text>


            <FlatList 
            data={engword_array}
            renderItem={({item}) => (
                <View style={styles.item}>
                    <TouchableOpacity onPress={()=> pressHandler(item.engword_explained)}><Text>{item.id}{item.engword_explained}</Text></TouchableOpacity>
                </View>
            )}
            />
            


        </View>
        </SafeAreaView>

        // <View>
        //     <Text>LearnEngWordss</Text>
        //     <Text>{ engword }</Text>


        //     <FlatList 
        //     data={engword_array}
        //     renderItem={({item}) => (
        //         <View>
        //             <TouchableOpacity onPress={()=> pressHandler(item.engword_explained)}><Text>{item.id}{item.engword_explained}</Text></TouchableOpacity>
        //         </View>
        //     )}
        //     />
            


        // </View>
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

export default LearnEngWordss;