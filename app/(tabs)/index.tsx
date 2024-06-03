import { StyleSheet, View } from "react-native";
import React, { useMemo, useState } from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";

import listingsData from "@/assets/data/airbnb-listings.json";
import listingsDataGeo from "@/assets/data/airbnb-listings.geo.json";

import ListingsMap from "@/components/ListingsMap";
import ListingsBottomSheet from "@/components/ListingsBottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Page = () => {
  const [category, setCategory] = useState("Tiny homes");
  const items = useMemo(() => listingsData as any, []);

  const onDataChange = (category: string) => {
    setCategory(category);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, marginTop: 50 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChange} />,
        }}
      />
      {/* <Listings listings={items} category={category} /> */}
      <ListingsMap listings={listingsDataGeo} />
      <ListingsBottomSheet listings={items} category={category} />
    </GestureHandlerRootView>
  );
};

export default Page;
