import { useEffect, useState } from 'react'
import { StyleSheet, TouchableHighlight, Text, View, Image } from 'react-native'
import { removeFromCart, addToCart } from './action'
import { useDispatch, useSelector } from 'react-redux'



const Product = (props) => {
    const item = props.item
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.reducer)
    const [isAdded, setIsAdded] = useState(false);


    const handleAddToCart = (item) => {

        dispatch(addToCart(item))
    }
    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item.name))
    }
    useEffect(() => {
        let result = cartItems.filter((element) => {
            return element.name === item.name
        });
        if (result.length) {
            setIsAdded(true)
        } else {
            setIsAdded(false)
        }
    }, [cartItems])
    return (
        <View style={{ marginBottom: 10, alignItems: 'center', borderBottomWidth: 2, borderBottomColor: 'red' }}>
            <Text style={{ fontSize: 21, color: 'green' }}>{item.name}</Text>
            <Text style={{ fontSize: 20 }}>{item.price}</Text>
            <Text style={{ fontSize: 16 }}>{item.color}</Text>
            <Image style={{ height: 140, width: 200 }} source={{ uri: item.image }} />
            {
                isAdded ?
                    <TouchableHighlight style={{ marginBottom: 40 }} onPress={() => handleRemoveFromCart(item)}>
                        <Text style={style.button}>Remove to cart</Text>
                    </TouchableHighlight>
                    :
                    <TouchableHighlight style={{ marginBottom: 40 }} onPress={() => handleAddToCart(item)}>
                        <Text style={style.button}>Add to cart</Text>
                    </TouchableHighlight>
            }
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

export default Product;