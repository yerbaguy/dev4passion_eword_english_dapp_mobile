/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';

require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
//import React from 'react';

import Web3 from 'web3';

import  EWordContractt  from './utils/EWordContract.json';

// 0x76d9c26896A069f481efCDe2d3E0C706dAC2A9BB
const ewordAddress = "0x047F65031c8aBf370FDBfEf667B0b1fd702F09Ef"
// const ewordAddress = "0x76d9c26896A069f481efCDe2d3E0C706dAC2A9BB"

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
var Contract = require('web3-eth-contract');


import { useState, useEffect} from 'react';
import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import type {Node} from 'react';
import {
  SafeAreaView,
  Modal,
  Touchable,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import EWords from './EWords';
import EngWords from './EngWords';
import { Formik } from 'formik';
//import LearnEngWords from './LearnEngWords';
import LearnEngWordss from './LearnEngWordss';
import LearnEngWordsWeb3 from './LearnEngWordsWeb3';
import EngWordss from './EngWordss';
import LearnEngWordsWeb3_1 from './LearnEngWordsWeb3_1';


//const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
var Contract = require('web3-eth-contract');

//import Web3 from 'web3';


const Tab = createBottomTabNavigator();

// const onGetAccounts = async() => {
//   console.log("onGetAccounts");

//   try {
//     web3.setProvider(provider);
//     const acc = await web3.eth.personal.getAccount();
//     console.log(acc);
//   } catch (error) {
//     console.log("error", error);
//   }
// }

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name='Home' component={MainScreen} /> */}

      {/* <Tab.Screen name='Home' component={DrawerNavigator} /> */}
      
      {/* <Tab.Screen name='Learn' component={LearnnnnScreen} options={{ headerShown: false }}/> */}
      <Tab.Screen name='Learn' component={LearnEngWordss} options={{ headerShown: false }}/>
      {/* <Tab.Screen name='Words' component={WordssScreen} /> */}
      <Tab.Screen name='Words' component={EngWordss} options={{ headerShown: false }}/>
      {/* <Tab.Screen name='Contact' component={ContactScreen} /> */}
    </Tab.Navigator>
  )
}

const MainScreen = () => {
  return (
    <Text>MainScreen</Text>
  )
}





const LearnScreen = () => {
  
  const [correct_engword_explained, setCorrect_engword_explained] = React.useState([
    {engword_explained:"case", key:"7"}
  ])

  const [engword, setEngword] = React.useState([
    {engword:"case", key:"6"}
  ])
  const [engword_explained, setEngword_Explained] = React.useState([
    {engword_explained:"kind", key:"2"},
    {engword_explained:"hardly", key:"3"},
    {engword_explained:"least", key:"4"},
    {engword_explained:"particular", key:"5"},
    {engword_explained:"each", key:"6"},
  ])

  const handleClick = (item) => {

    console.log("item", item);
  }
 
 // const merged_arrays = engword + engword_explained;
 
//  const merged_arrays = engword.concat(engword_explained);
// const merged_arrays = engword_explained.concat(correct_engword_explained);

const merged_arrays = [...engword_explained, ...correct_engword_explained];
  
  return (

    <View>
      {
        // engword_explained.map((item) => {
        //   return (
        //     <View>
        //       <Text>{item.engword_explained}</Text>
        //     </View>
        //   )
        // })

        // merged_arrays.map((item) => {
        //   return (
        //     <View>
        //       <Text>{item.engword}</Text>
        //       <Text>{item.engword_explained}</Text>
        //     </View>
        //   )
        // })

        // engword_explained.map((item) => {
        //   return (
        //     <View>
        //       <Text>{item.engword_explained}</Text>
        //     </View>
        //   )
        // })

        // merged_arrays.map((item) => {
        //   return (
        //     <View>
        //       <Text>{item.engword_explained}</Text>
        //     </View>
        //   )
        // })

        merged_arrays.map((item) => {
          return (
            <View>
              {/* <TouchableOpacity> */}
              {/* <Text onPress={handleClick(item)} key={index}>{item.id}{item.engword_explained}</Text> */}
              <Text onPress={handleClick(item)}>{item.id}{item.engword_explained}</Text>
              {/* </TouchableOpacity> */}
            </View>
          )
        })




        // console.log("merged_array", merged_arrays)

        
      }

    </View>

    // <Text>Learn Screen</Text>
   
  )
}

const LearnnScrean = () => {

  const [correct_engword_explained, setCorrect_engword_explained] = React.useState([
    {engword_explained:"case", key:"6"}
  ])

  const [engword_explained, setEngword_Explained] = React.useState([
    {engword_explained:"kind", key:"1"},
    {engword_explained:"hardly", key:"2"},
    {engword_explained:"least", key:"3"},
    {engword_explained:"particular", key:"4"},
    {engword_explained:"each", key:"5"},
  ])

  const [isRender, setisRender] = useState(false)
  const [isModalVisible, setisModalVisible] = useState(false)

  const merged_arrays = [...engword_explained, ...correct_engword_explained];

  const renderItem = ({item, index}) => {

  }

  return ( 
    
    <SafeAreaView style={styles.container}>
      <FlatList
      data={merged_arrays}
      // keyExtractor={(item)=>item.id.toString()}
      keyExtractor={(item)=>item.toString()}
      renderItem={renderItem}
      extraData={isRender}
      />

   <Modal
    animationType='fade'
    visible={isModalVisible}
    onRequestClose={()=>setisModalVisible(false)}
    >
      <View>

      </View>

    </Modal>



    </SafeAreaView>
  )
}


const LearnnnnScreen = () => {
  
  const [correct_engword_explained, setCorrect_engword_explained] = React.useState([
    {engword_explained:"case", id:"7"}
  ])

  const [engword_explained, setEngword_Explained] = React.useState([
    {engword_explained:"kind", id:"2"},
    {engword_explained:"hardly", id:"3"},
    {engword_explained:"least", id:"4"},
    {engword_explained:"particular", id:"5"},
    {engword_explained:"each", id:"6"},
  ])

  const merged_arrays = [...engword_explained, ...correct_engword_explained];

  const words = [
    {
      id: 1,
      engword_explained: 'kind'
    },
    {
      id: 2,
      engword_explained: 'hardly'
    },
    {
      id: 3,
      engword_explained: 'least'
    },
    {
      id: 4,
      engword_explained: 'particular'
    },
];

   const [engword, setEngword] = useState([
    {
      key: "1",
      engword_explained: "kind"
    },
    {
      key: "2",
      engword_explained: "hardly"
    },
    {
      key: "3",
      engword_explained: "least"
    },
    {
      key: "4",
      engword_explained: "particular"
    },
   ])

  const oneMergedItem = ({item}) => {

    <Text>{item.engword_explained}</Text>
  }

  const handleit = (item) => {

    console.log("item",item);
  }
  
  const pressHandler = (engword_explained) => {

    console.log(engword_explained);
  }
  
  return (
    
    // <Text>
    //   Learnnnn Screen
    // </Text>

    <View>
      <FlatList 
      //  data={engword}
       data={merged_arrays}
       renderItem={({item}) => (
        <View>
          <TouchableOpacity onPress={()=> pressHandler(item.engword_explained)}>
          <Text>
            {/* {item.engword_explained} */}
           {item.engword_explained}
           </Text>
           </TouchableOpacity>
        </View>
       )}
      />
    </View>

    //////works
    // <View>
    //   <ScrollView>
    //     {
    //       engword.map((item) => {
    //         return (
    //           <View key={item.key}>
    //             {/* <Text>{item.engword_explained}</Text> */}
    //             <Text onPress={handleit(item)}>{item.engword_explained}</Text>
    //           </View>
    //         )
    //       })
    //     }
    //   </ScrollView>
    // </View>
    ////////////

    // <SafeAreaView>
    // <View>
    // {/* <Text>
    //   Learnnnn Screen
    // </Text> */}
    // <FlatList
    // // data = {merged_arrays}
    // data = {words}

    // renderItem = { oneMergedItem }
    // />
    // </View>
    // </SafeAreaView>
  )
}



const WordssScreen = () => {
  return (
     <Text>Words Screen</Text>
    
  )
}


const ContactScreen = () => {
  return (
    <Text>ContactScreen</Text>
  )
}


function HomeScreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function LearnWordsScreen({ navigation }) {

  // const [engword, setEngword] = React.useState('');
  const [engword, setEngword] = useState('');
  const [plword, setPlword] = useState('');
  const [text, setText] = useState('');
  const [data, setData] = useState([1]);

   // var data = 1;
  


   const countrandeword = (data) => {
  //  const countrandeword = () => {



      console.log("dataa_countrandeword", data);

      const min = Math.ceil(1);
      // max = Math.floor(data.length);
      const max = Math.floor(data);
  
      // return Math.floor(Math.random() * (max - min) + min);
      const dataa =  Math.floor(Math.random() * (max - min) + min);
      console.log("random_int_countrandeword", dataa)

        data = dataa;
        engWordPlWord(data);

      return data;
  }

  const engWordPlWord = (countrand) => {

       // var data = [];

       console.log("engwordplword", countrand);

       Contract.setProvider('wss://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm');

       const contractt = new Contract(EWordContractt.abi, ewordAddress);


       var result = contractt.methods.getEngWordPlWord(countrand).call((error, result) => {
        console.log(result);
        console.log(result[0]);
        var engw = result[0];
       // data = engw;
        setEngword(engw);
        console.log(result[1]);
        var plw = result[1];
        setPlword(plw);
    });

  }

  const compareTextWithEngWord = (newText) => {

       var engw = newText

       
       console.log(newText);
       console.log("engword", engword);
       console.log("text", text);

       if (engw === engword) {
        console.log("OK");
        setEngword("");
        countrandeword(data);
        // setEngword("");
       } else {
        console.log("No");
       }
       
  }

  // const onGetAccounts = async() => {
  //   console.log("onGetAccounts");
  // }

  useEffect(()=>{

   // onGetAccounts();

   console.log("AlkjsdBlkajsdlfkjCClkjasdlkjfalksd");

    console.log("lkajsdlkfj");
 
    var data = [];

    Contract.setProvider('wss://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm');

    const contractt = new Contract(EWordContractt.abi, ewordAddress);
     
    //const account = contract.methods.accounts
     // console.log("account", account)

    console.log("contract", contractt);


    var result1 = contractt.methods.getEWords().call((error, result1) => {

      console.log("result1", result1.length);
       // var data = result1.length;
       // setData(data);
        // data = result1.length;
        data_result = result1.length;
        data = data_result
        setData(data);
        console.log("data_result", data);     
        var countrand = countrandeword(data);
     // var countrand = countrandeword();
       console.log("countrand", countrand);
   
      const min = Math.ceil(1);
      // max = Math.floor(data.length);
    const max = Math.floor(data);
  
      // return Math.floor(Math.random() * (max - min) + min);
      const dataa =  Math.floor(Math.random() * (max - min) + min);
      console.log("random_int", dataa)

          


    //   var result = contractt.methods.getEngWordPlWord(dataa).call((error, result) => {
    //     console.log(result);
    //     console.log(result[0]);
    //     console.log(result[1]);
    // });

    var result = contractt.methods.getEngWordPlWord(countrand).call((error, result) => {
      console.log(result);
      console.log(result[0]);
      var engw = result[0];
      setEngword(engw);
      console.log(result[1]);
  });
    

  });


    getengword();
    console.log(engword)
    compareTextWithEngWord();
  // },[],[engword], [compareTextWithEngWord])
 },[])
//})

  const getengword = () => {

    console.log("engword", text);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      /> */}
      <Text>Learn Words</Text>

      <SafeAreaView>

      <TextInput
        placeholder="Type here to translate!"
        // onChangeText={newText => setText(newText)}
        onChangeText={newText => compareTextWithEngWord(newText)}
        
        defaultValue={text}
      />

      <Text>{text}</Text>
      {/* <Text>{engword}</Text> */}
      <Text>{plword}</Text>





        <TextInput
        // onChangeText={engw => setEngword(engw)}
        // onChangeText={engw => setEngword(engw)}
      
      
        // onChangeText={setEngword}
        // placeholder= 'english-word'
        // value={engword}
      
      
      />
      </SafeAreaView>
    </View>
  );
}

function WordsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      /> */}
      <Text>Words</Text>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}



const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Words' component={WordsScreen} />
      <Drawer.Screen name='Learn' component={LearnWordsScreen} />

    </Drawer.Navigator>
  )
}

const App: () => Node = () => {


  const [web3] = useState<Web3>(new Web3())
  //  const [provider] = useState(new Web3.providers.HttpProvider('http://127.0.0.1:8545'))
  // const [provider] = useState(new Web3.providers.HttpProvider('http://127.0.0.1:8545'))
  // const [provider] = useState(new Web3.providers.HttpProvider('wss://polygon-mainnet.g.alchemy.com/v2/gDpJAQB45zHfsl9wQW3acVBU_dUOycJX'))
  const [provider] = useState(new Web3.providers.HttpProvider('wss://polygon-mainnet.g.alchemy.com/v2'))

  // const [provider] = useState(new Web3.providers.HttpProvider('http://192.168.0.0.1:8545'))


  const onGetAccounts = async() => {
    console.log("onGetAccounts");
  
    try {
      web3.setProvider(provider);
      // const acc = await web3.eth.personal.getAccounts();
      const acc = await web3.eth.personal.getAccounts();
      console.log(acc);
    } catch (error) {
      console.log("error", error);
    }
  }




  // useEffect(()=>{

  //   onGetAccounts();
  //  // console.log("lkajsdlkfj");
    
  // },[])

  const [engword, setEngword] = React.useState('');
  const [text, setText] = useState('');

  // const [engword_explained, setEngword_Explained] = React.useState([
  //   {engword_explained:"kind", key:"1"},
  //   {engword_explained:"hardly", key:"2"},
  //   {engword_explained:"least", key:"3"},
  //   {engword_explained:"particular", key:"4"},
  //   {engword_explained:"each", key:"5"},
  // ])

  

  const isDarkMode = useColorScheme() === 'dark';


//  useEffect(()=> {

//   LearnWordsScreen();

//  },[])

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

    <NavigationContainer>
    

<SafeAreaView>

   <LearnEngWordsWeb3_1 />
  {/* <LearnEngWordsWeb3 /> */}
  {/* <EngWords /> */}
   {/* <EWords /> */}
  
        <TextInput
        // onChangeText={engw => setEngword(engw)}
        // onChangeText={engw => setEngword(engw)}
        onChangeText={newText => setEngword(newText)}
        placeholder= 'english-word'
       // value={engword}
        defaultValue={text}
        />
        <Text>{text}</Text>
      </SafeAreaView>


  
    {/* <Drawer.Navigator initialRouteName="Learn">
      
      <Drawer.Screen name="Words" component={WordsScreen} />
      <Drawer.Screen name="Learn" component={LearnWordsScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator> */}

    <BottomTabNavigator />
  </NavigationContainer>



    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Header />
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>

    //         <EWords />


    //       <Section title="Step One">
    //         Edit <Text style={styles.highlight}>App.js</Text> to change this
    //         screen and then come back to see your edits.
    //       </Section>
    //       <Section title="See Your Changes">
    //         <ReloadInstructions />
    //       </Section>
    //       <Section title="Debug">
    //         <DebugInstructions />
    //       </Section>
    //       <Section title="Learn More">
    //         Read the docs to discover what to do next:
    //       </Section>
    //       <LearnMoreLinks />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
  },

  item: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    alignItems: 'flex-start',

  },
  text: {
    marginVertical: 30,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
