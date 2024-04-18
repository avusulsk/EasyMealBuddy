import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";
import { recipeList } from "../Constant";

const RecipeListScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const filteredRecipes = recipeList.filter(recipe => {
        if (selectedCategory && (!recipe.categories || !recipe.categories.includes(selectedCategory))) {
            return false;
        }
        if (searchQuery.trim() === "") {
            return true;
        }
        return recipe.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 16, textAlign: "center"}}>
            {/* render header */}
            <Header headerText={"Hola Foodie! "} headerIcon={"bell-o"} />

            {/* Search Filter */}
            <SearchFilter icon="search" placeholder={"Enter your favorite recipe"} onSearch={handleSearch} />

            {/* Categories filter */}
            <View style={{ marginTop: 22 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
                {/* Categories list */}
                <CategoriesFilter onSelectCategory={handleCategorySelect} />
            </View>

            {/* Recipe List */}
            <View style={{ marginTop: 22, flex: 1 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
                {filteredRecipes.length > 0 ? (
                    <RecipeCard recipes={filteredRecipes} />
                ) : (
                    <Text>No recipes found</Text>
                )}
            </View>
        </SafeAreaView>
    );
};

export default RecipeListScreen;

const styles = StyleSheet.create({});
