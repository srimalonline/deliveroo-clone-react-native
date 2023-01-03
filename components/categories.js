import { ScrollView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from "./CategoryCard"
import client, { urlFor } from '../sanity';

const Categories = () => {

  const [categories , setCategories ] = useState([]);

  useEffect(()=> {
    client.fetch(`
    *[_type == 'category']
    `).then(data =>{
      setCategories(data);
    })
  },[])
  return (
    <ScrollView 
    contentContainerStyle={{ 
      paddingHorizontal: 15,
      paddingTop: 10,
     }}
    horizontal
    showsHorizontalScrollIndicator
    >
      {/* Category Card */}
      {categories.map(category => (
        <CategoryCard 
        key={category._id}  
        // imgUrl={urlFor(category.image).width(200).url()} 
        imgUrl='https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80'
        title={category.title} />
      ))}

    </ScrollView>
  )
}

export default Categories