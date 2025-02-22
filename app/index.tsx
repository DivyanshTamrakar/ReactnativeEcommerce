import { Text, View, StyleSheet, StatusBar, FlatList } from 'react-native';
 import { Link } from 'expo-router'; 
import useGetAllProducts from './hooks/getProductsData';
import SearchBar from './components/SearchBarComponent';
import ProductItem from './components/productItem';



  interface ProductItem {
    id: number
    title: string,
    price: number,
    description: string,
    category: {
      id: number,
      name: string,
      image: string
    },
    images: string[]
  }

export default function Index() {
  const {allProducts,setAllProducts} = useGetAllProducts()
  // console.log({allProducts});

  const renderItem = ({item} : {item:ProductItem}) =>{
    return <ProductItem key={item.id} product={item} onPress={()=>{}}/>
  }
  
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor="#c3c3c3" barStyle="dark-content" />

    <SearchBar value={""} onChangeText={""} placeholder={'Enter Product Name'}/>


    <View>
    <FlatList data={allProducts} 
    renderItem={renderItem}
    keyExtractor={(item, index) => index.toString()}
    numColumns={2} // Ensures two items per row
   />
    </View>

    

      {/* <Link href="/about" style={styles.button}>
        Go to About screen
      </Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c3c3c3',
  },
  text: {
    color: '#000',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#000',
  },
});
