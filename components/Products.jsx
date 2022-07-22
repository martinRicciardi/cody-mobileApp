
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import productActions from "../redux/actions/productActions";

export default function Products({filterStore}) {
    // const title = props.title
    // const [input, setInput] = React.useState('')
    
    // const FilteredStore = filterStore.filter(item => item.name.toLowerCase().startsWith(input.trim().toLowerCase()))
    filterStore && console.log(filterStore)
    
    return (
    <>
    <View>
    <Text>Nuestros eventos</Text>
    {filterStore?.length > 0 ? (
        <View>
            {filterStore?.map((item, i) => {
                return(<Image style={{height:40, width:40}} source={{ uri:item.image }} />)})}
            
        </View>
    ) : (
        <NoEvents/>
    ) }
    </View>
    </>
    )
}

