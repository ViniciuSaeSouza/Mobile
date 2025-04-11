import React from "react";

export default function HomeScreen() {
    return (
        <View
            style={
                isPortrait()
                    ? styles.listContainerPortrait
                    : styles.listContainerLandscape
            }
        >
            <FlatList
                data={pizzas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.list}
            />
            <CartPizza
                cart={cart}
                selectedPizza={selectedPizza}
                onCloseModal={handleCloseModal}
                onClearCart={() => setCart([])}
                isPortrait={isPortrait()}
            />
        </View>
    );
}
