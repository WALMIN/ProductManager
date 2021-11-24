import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export const LoadingGif = () => {

    return (
        <View style={{ flex: 1 }}>
            <Image
                source={{ uri: "https://c.tenor.com/vA3QAf-Fo4EAAAAC/shopping-grocery.gif" }}
                style={styles.img}
            />
        </View>
    )
}
const styles = StyleSheet.create({

    img: {
        height: 340,
        width: 400,
        top: -200,
        justifyContent: 'center',
        alignItems: 'center',
    }

},

)
