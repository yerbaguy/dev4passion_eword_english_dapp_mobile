import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import  EWordContractt  from './utils/EWordEngContract.json';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native-gesture-handler';

const ewordEngContract = "0x76d9c26896A069f481efCDe2d3E0C706dAC2A9BB"

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
var Contract = require('web3-eth-contract');

const LearnEngWords = () => {

    const [data1, setData1] = useState([]);
    // const [datacount, setDatacount] = useState([]);
   // const [datacount, setDatacount] = React.useState([]);
    // const [datacount, setDatacount] = React.useState("");
    // const [datacount, setDatacount] = React.useState(1);
    const [datacount, setDatacount] = React.useState("");
    const [number, setNumber] = React.useState();
    const [randEngWord, setRandEngWord] = React.useState();
    
     //const [engword, setEngword] = React.useState([]);
    //  const [engword, setEngword] = React.useState("");
   
   
    const [engword, setEngword] = useState(); 
    const [ewordsl, setEwordsl] = useState();

    // const [correct_engword_explained, setCorrect_engword_explained] = React.useState([]);
    // const [engword_explained, setEngword_Explained] = React.useState([]);

    const [correct_engword_explained, setCorrect_engword_explained] = useState();
    const [engword_explained, setEngword_Explained] = useState();
    const [engword_array, setEngword_array] = useState([]);

     // const merged_arrays = [...engword_explained, ...correct_engword_explained];



    let data = {
        data: data
    }

    useEffect(() => {
        // console.log("LearnEngWordslkajsdlfkja");
        // Contract.setProvider('wss://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm');
    
        // const getUser = async () => {
        //     try {
        //       const userData = JSON.parse(await AsynStorage.getItem("user"))
        //       console.log("userData", userData);

        //     } catch (error) {
        //      console.log(error); 
        //     }
        //   };
    
       // console.log("getdata", getdata);
        // const contractt = new Contract(EWordContractt.abi, ewordEngContract);
         
        // console.log("contract", contractt);

        // var result1 = contractt.methods.getEWords().call((error, result1) => {

        //     console.log("result1", result1.length);
        //      var data = result1.length;     
         
        //     const min = Math.ceil(0);
        //     // max = Math.floor(data.length);
        //   const max = Math.floor(data);
        
        //     // return Math.floor(Math.random() * (max - min) + min);
        //     const dataa =  Math.floor(Math.random() * (max - min) + min);
           
        //     // data = dataa;
        //     //   AsyncStorage.setItem("data_count", JSON.stringify(data));

        //    // set_dataa(dataa);
        //     // console.log("random_int", dataa)
        //     console.log("random_int", dataa)
        //     let data_to_string = dataa.toString();
        //     console.log("data_to_string", data_to_string);
        //     // setDatacount(data_to_string);
            
        //    // setDatacount([...data_to_string, data_to_string]);

        //     AsyncStorage.setItem("datacount", JSON.stringify(dataa));

        //     const getdata = async () => {
        //        let datacount =  await AsyncStorage.getItem("datacount");
        //          console.log("datacount", datacount);
        //     }



        //             var result = contractt.methods.getEWords1(dataa).call((error, result) => {
        //       console.log(result);

        //       setData1([...result, result])
        //       //setData1(data)
        //       // console.log(data);
        //        console.log("fetchEWords1", result);
         
         



           
           

            


        //     //   console.log(result[0]);
        //     //   console.log(result[1]);
        //   });
    
        // //     var result = contractt.methods.getEngWordPlWord(dataa).call((error, result) => {
        // //       console.log(result);
        // //       console.log(result[0]);
        // //       console.log(result[1]);
        // //   });
          
    
        // });

    
        var eword_result = contractt.methods.getEngWordEngExplainedAndPronounciation(1).call((error, result) => {

            let engword = "";
            console.log("eword_result--", result[0]);
            engword = result[0];
             setEngword(engword);
           // engword = result[0];
        });

        var ewords_result = contractt.methods.getEWords1(0).call((error, result) => {

            let engword_explained = "";
            // console.log("ewords_result--", result[0]);
            // console.log("ewords_result--", result[0]);
            console.log("ewords_result--", result);
            // setEngword_array([...engword_array, result]);
            setEngword_array(result);
            console.log("engword_array--", engword_array);
            // engword_explained = result[0];
            engword_explained = result;
            // setEngword_Explained(result[0]);
            // setEngword_Explained(engword_explained);
            //setEngword_Explained(result);
            console.log("engwordexplained_result", engword_explained);

        });




    },[engword],[engword_explained],[engword_array])
   //},[engword][ewords_result])

    // const newdata = "5"

    // setDatacount([...newdata, newdata]);
    // console.log("newdata", newdata);


    Contract.setProvider('wss://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm');


    const contractt = new Contract(EWordContractt.abi, ewordEngContract);
         
    console.log("contract", contractt);

    var getewords_result = contractt.methods.getEWords().call((error, result) => {

        console.log("result--", result.length);
        setEwordsl(result.length);
        console.log("ewords_l--", ewordsl);
        random_ewords(result.length);
    });

    const random_ewords = (result) => {
        console.log("random_ewords_result_l--", result);

        var data = result;     
     
        const min = Math.ceil(0);
        // max = Math.floor(data.length);
      const max = Math.floor(data);
    
        // return Math.floor(Math.random() * (max - min) + min);
        const dataa =  Math.floor(Math.random() * (max - min) + min);

        console.log("random_ewords_dataa--", dataa);
       // ewordresult(dataa);

    }

    // const ewordresult = (dataa) => {

    //     let engword = "";

    //     var eword_result = contractt.methods.getEngWordEngExplainedAndPronounciation(dataa).call((error, result) => {

    //         console.log("eword_result--", result[0]);
    //         engword = result[0];
    //         // setEngword(engword);
    //        // engword = result[0];
    //   });

    //       console.log("ewordresult--", engword);
    // }

    // var eword_result = contractt.methods.getEngWordEngExplainedAndPronounciation(dataa).call((error, result) => {

    //     console.log("eword_result--", result[0]);
    //     engword = result[0];
    //     // setEngword(engword);
    //    // engword = result[0];
    // });


    const handleClick = (item) => {

        console.log("item", item);
      }

      const pressHandler = (item) => {

        console.log("item", item);
      }


    var result1 = contractt.methods.getEWords().call((error, result1) => {

        console.log("result1", result1.length);
         var data = result1.length;     
     
        const min = Math.ceil(0);
        // max = Math.floor(data.length);
      const max = Math.floor(data);
    
        // return Math.floor(Math.random() * (max - min) + min);
        const dataa =  Math.floor(Math.random() * (max - min) + min);

       

       
        // data = dataa;
        //   AsyncStorage.setItem("data_count", JSON.stringify(data));
        AsyncStorage.setItem("data_count", "lksdjfl");

       // set_dataa(dataa);
        // console.log("random_int", dataa)
        console.log("random_int", dataa)

        // setRandEngWord(dataa);
        // console.log("randomEngWord", randEngWord);



        let data_to_string = dataa.toString();
        console.log("data_to_string", data_to_string);
       


          
                // var eword_result = contractt.methods.getEngWordEngExplainedAndPronounciation(dataa).call((error, result) => {

                //     console.log("eword_result", eword_result[0][1]);

                // });

                //////////////////////////////
                // var eword_result = contractt.methods.getEngWordEngExplainedAndPronounciation(dataa).call((error, result) => {

                //     console.log("eword_result", result);
                //      const engwordd = result[0];
                //      // console.log("engword", engword);
                //       setEngword(engwordd);
                //       console.log("engword", engwordd);
                //     // setEngword([...engword, engword]);

                //     var ewords_result = contractt.methods.getEWords1(1).call((error, result) => {

                //         // console.log("ewords_result", result[0]);
                //         console.log("ewords_result", result);
                //         const engwords = result[0];
                //         setEngword_Explained(engwords);

                //          //setEngword_Explained([...engword_explained, result]);
                //       //  setEngword_Explained(result)




                //     });
                   
                //     // setEngword(result[0]);

                // });
                ////////////////////////////////////




                //////
    //             var result = contractt.methods.getEWords1(dataa).call((error, result) => {
    //      //// console.log(result);

    //       ///// setData1([...result, result])
          
    //       //setData1(data)
    //       // console.log(data);
    //        console.log("fetchEWords1", result);
     
    //     //  setNumber(5);
    //     //  console.log("number", number);

    //     //  setRandEngWord(dataa);
    //     // console.log("randomEngWord", randEngWord);
             

    //     //   console.log(result[0]);
    //     //   console.log(result[1]);
    //   });

      ///////////////////

    //     var result = contractt.methods.getEngWordPlWord(dataa).call((error, result) => {
    //       console.log(result);
    //       console.log(result[0]);
    //       console.log(result[1]);
    //   });
      

    });


    return (
        <View>
            <Text>LearnEngWords</Text>
            <Text>{engword}</Text>
            {/* {
                merged_arrays.map( (item) => (
                    <Text>{item.engword_explained}</Text>
                ))
            } */}
             {/* {
                engword_explained.map( (item) => (
                    <Text>{item.engword_explained}</Text>
                ))
            } */}

            {/* {
                engword_array.map( (item) => (
                    <Text onPress={handleClick(item)}>{item.id}{item.engword_explained}</Text>                    
                ))
            } */}

{/* onPress={()=> pressHandler(item.engword_explained)}> */}


            <FlatList 
            data={engword_array}
            renderItem={({item}) => (
                <View>
                    {/* <Text>{item.engword_explained}</Text> */}
                    {/* <TouchableOpacity><Text onPress={handleClick(item)}>{item.id}{item.engword_explained}</Text></TouchableOpacity> */}
                    <TouchableOpacity onPress={()=> pressHandler(item.engword_explained)}><Text>{item.id}{item.engword_explained}</Text></TouchableOpacity>

                </View>
            )}
            />
        </View>
    )
}

export default LearnEngWords;