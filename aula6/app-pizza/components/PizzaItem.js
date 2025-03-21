import React from 'react'

export default function PizzaItem() {
  return (
    <View>
      <Image source={{ uri: item.image }} style={stylesPizza.image} />
      <View style={stylesPizza.info}>
        <Text style={stylesPizza.name}>{item.name}</Text>
        <Text style={stylesPizza.price}>${item.price.toFixed(2)}</Text>
      </View>
    </View>
  )
}

const stylesPizza =
StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',

  },
  description: {
    fontSize: 14,
    color: '#666'
  },
  price: {
    fontSize: 16,
    color: '#000'
  }
})