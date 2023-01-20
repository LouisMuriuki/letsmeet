import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  width:string
    searchtext:string,
    setSearchText:(searchText:string) => void
}

const SearchBar: React.FC<Props> = ({searchtext,width,setSearchText}:Props) => {


  return (
    <View style={{ flexDirection: 'row',marginRight:5, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'gray',width:width }}>
      <TextInput
        style={{ flex: 1, padding: 2,color:"white", }}
        placeholder="Search name..."
        placeholderTextColor={"white"}
        onChangeText={text => setSearchText(text)}
        value={searchtext}
      />
      {searchtext.length > 0 ? (
        <TouchableOpacity onPress={() => setSearchText('')}>
          <Ionicons name="ios-close-circle" size={20} color="gray" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <Ionicons name="ios-search" size={20} color="gray" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;