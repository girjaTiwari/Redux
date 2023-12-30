import { } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from './android/components/redux/Header'
import Product from './android/components/redux/Product'


const App = () => {
  const products = [
    {
      name: "Apple Laptop",
      color: 'Grey',
      price: 150000,
      image: "https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc"
    },
    {
      name: "Dell Laptop",
      color: 'White',
      price: 50000,
      image: "https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc"
    },
    {
      name: "Lenovo Laptop",
      color: 'Black',
      price: 70000,
      image: "https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc"
    },
  ]
  return (
    <View style={style.container}>
      <Header />
      <ScrollView>
        {
          products.map((item) => <Product item={item} />)
        }
      </ScrollView>
    </View>
  )

}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App;