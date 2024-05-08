import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  useWalletConnect,
  withWalletConnect,
} from "@walletconnect/react-native-dapp";
import * as React from "react";
import { Button } from 'react-native';

import { scheme } from './app.json';

function EWordss(): JSX.Element {
  const connector = useWalletConnect();
  if (!connector.connected) {
    /**
     *  Connect! 🎉
     */
    return <Button title="Connect" onPress={() => connector.connect()} />;
  }
  return (
    <Button title="Kill Session" onPress={() => connector.killSession()} />
  );
}

// `${scheme}://`


export default withWalletConnect(EWordss, {
    redirectUrl:
      Platform.OS === "web" ? window.location.origin : `${scheme}://`,
    storageOptions: {
      asyncStorage: AsyncStorage,
    },
  });


// export default withWalletConnect(EWords, {
//   redirectUrl:
//     Platform.OS === "web" ? window.location.origin : "yourappscheme://",
//   storageOptions: {
//     asyncStorage: AsyncStorage,
//   },
// });