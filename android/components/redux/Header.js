import { useEffect, useState } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'



const Header = () => {

    const cartData = useSelector((state) => state.reducer)
    const [cartItems, setCartItems] = useState(0);
    //  console.warn(cartData);

    useEffect(() => {
        setCartItems(cartData.length);
    }, [cartData])

    return (
        <View style={{ backgroundColor: 'green', flexDirection: 'row', justifyContent: 'space-between' }}>
            <StatusBar backgroundColor="green" />
            <Text style={{
                fontSize: 21, alignSelf: 'center', marginLeft: 16,
                color: 'white'
            }}>Redux Example</Text>

            <Text style={{
                fontSize: 16, textAlign: 'center',
                alignSelf: 'flex-end',
                margin: 10, color: 'black',
                backgroundColor: 'yellow',
                borderRadius: 20,
                borderBlockColor: '#000',
                borderWidth: 1,
                height: 26,
                width: 26

            }}>{cartItems}</Text>

        </View>
    )
}


const style = StyleSheet.create(
    {
        main: {
            flex: 1,
            backgroundColor: 'pink'
        },
        login: {
            fontSize: 30, textAlign: 'center', backgroundColor: 'green', color: 'white', padding: 10
        },
        input: {
            marginTop: 16,
            borderWidth: 1,
            borderRadius: 2,
            borderColor: 'green',
            paddingLeft: 10,
            elevation: 2,
            shadowColor: 'grey',
            shadowOpacity: 4
        },
        button: {
            marginTop: 25,
            fontSize: 21,
            backgroundColor: 'green',
            borderRadius: 8,
            borderWidth: 1,
            textAlign: 'center',
            color: '#fff',
            padding: 8

        },
        errorMessage: {
            color: 'red'
        }
    }
)

const buttonStyle = StyleSheet.create({
    setUi: {
        backgroundColor: 'green',
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        color: 'white'
    },
    getUi: {
        backgroundColor: 'blue',
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        color: 'white'
    },
    removeUi: {
        backgroundColor: 'red',
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        color: 'white'
    },
})

export default Header;