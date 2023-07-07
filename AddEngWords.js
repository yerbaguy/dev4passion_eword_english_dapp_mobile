import React, { useState, useEffect } from "react"
import { View, Text, SafeAreaView, StatusBar, ScrollView, Button } from 'react-native';

//import MetaMaskSDK from '@metamask/sdk';

import {ethers} from 'ethers';

const AddEngWords = () => {

    const [account, setAccount] = useState();



    const connect = async () => {
        // try {
        //   const result = await ethereum.request({method: 'eth_requestAccounts'});
        //   console.log('RESULT', result?.[0]);
        //   setAccount(result?.[0]);
        //   getBalance();
        // } catch (e) {
        //   console.log('ERROR', e);
        // }
      };

    const backgroundStyle = {
        // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      };
    //   const textStyle = {
    //     color: isDarkMode ? Colors.lighter : Colors.darker,
    //     margin: 10,
    //     fontSize: 16,
    //   };
    const textStyle = {
        // color: isDarkMode ? Colors.lighter : Colors.darker,
        margin: 10,
        fontSize: 16,
      };

    return (
        // <View>
        //     <Text>AddEngWords</Text>
        // </View>

        <SafeAreaView style={backgroundStyle}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <StatusBar />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Button title={account ? 'Connected' : 'Connect'} onPress={connect} />
        {/* <Button title="Sign" onPress={sign} />
        <Button title="Send transaction" onPress={sendTransaction} />
        <Button title="Add chain" onPress={exampleRequest} />

        <Text style={textStyle}>{chain && `Connected chain: ${chain}`}</Text> */}
        <Text style={textStyle}>
          {' '}
          {account && `Connected account: ${account}\n\n`}
          {account && balance && `Balance: ${balance} ETH`}
        </Text>
        {/* <Text style={textStyle}>
          {' '}
          {response && `Last request response: ${response}`}
        </Text> */}
      </ScrollView>
    </SafeAreaView>
    )
}

export default AddEngWords;