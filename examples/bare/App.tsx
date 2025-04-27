import React from 'react';
import { Button, Text, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';

function App(): React.JSX.Element {
  const modalRef = React.useRef<ReactNativeModal>(null);

  return (
    <View>
      <View style={{ marginTop: 40, paddingInline: 40 }}>
        <Button
          title={'Open Modal 2!'}
          onPress={() => modalRef.current?.open()}
        />
      </View>
      <ReactNativeModal
        ref={modalRef}
        animationIn="slideInUp"
        backdropColor="rgb(29, 41, 57)"
        backdropOpacity={0.6}
        useNativeDriver={true}
        hideModalContentWhileAnimating>
        <View
          style={{ height: 200, backgroundColor: 'white', borderRadius: 16 }}>
          <Text>Hello!</Text>
          <Button
            title="Hide modal"
            onPress={() =>
              modalRef.current?.close(() => {
                console.log('closed modal');
              })
            }
          />
        </View>
      </ReactNativeModal>
    </View>
  );
}

export default App;
