import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { categories, colors } from "../Constant";

const CategoriesFilter = ({ onSelectCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryPress = (index) => {
        setSelectedCategory(index);
        onSelectCategory(categories[index].category);
    };

    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map((category, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleCategoryPress(index)}
                            style={{
                                backgroundColor: selectedCategory === index ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
                                marginRight: 36,
                                borderRadius: 8,
                                paddingHorizontal: 16,
                                paddingVertical: 10,
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: 4 },
                                shadowOpacity: 0.1,
                                shadowRadius: 7,
                                marginVertical: 16,
                            }}
                        >
                            <Text
                                style={{
                                    color: selectedCategory === index ? colors.COLOR_LIGHT : colors.COLOR_DARK,
                                    fontSize: 18,
                                }}
                            >
                                {category.category}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default CategoriesFilter;

const styles = StyleSheet.create({});
