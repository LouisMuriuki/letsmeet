import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

import { BarCodeScanner, BarCodeScannerProps } from "expo-barcode-scanner";

interface BarCodeScannerPropsWithFocusDepth extends BarCodeScannerProps {
    focusDepth: number;
  }
const QRscanner = () => {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [scanned, setScanned] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const scanOverlay = {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, .6)",
  };

  const MyBarCodeScanner: React.FC<BarCodeScannerPropsWithFocusDepth> = (props) => {
    return <BarCodeScanner {...props} />
  }
  
  return (
    <View style={styles.container}>
      <MyBarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        focusDepth={0.5}
      />
      <View
        style={[scanOverlay, { top: 0, left: 0, width: "5%", bottom: 0 }]}
      />
      <View
        style={[
          scanOverlay,
          { top: 0, left: "5%", right: "5%", height: "25%" },
        ]}
      />
      <View
        style={[
          scanOverlay,
          { bottom: 0, left: "5%", right: "5%", height: "25%" },
        ]}
      />
      <View
        style={[scanOverlay, { top: 0, right: 0, width: "5%", bottom: 0 }]}
      />
      {scanned && (
        <View style={styles.scanbtn}>
          <Button
            title={"Tap to Scan Again"}
            onPress={() => [setScanned(false)]}
          />
        </View>
      )}
    </View>
  );
};

export default QRscanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  minicontainer: {
    flex: 1,
    flexDirection: "column",
  },
  layerCenter: {
    flex: 1,
    flexDirection: "row",
  },
  focused: {
    flex: 10,
  },
  scanbtn: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
