import React from "react";
import { Text, View } from 'react-native';
import eventsActions from "../redux/actions/eventsActions";
import { useEffect, useState  } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import NoEvents from "../components/NoEvents";
import Gallery from "../components/Gallery";

function Events() {

    const dispatch = useDispatch()
    const [reload, setReload] = useState(false);
    
    useEffect(() => {
        dispatch(eventsActions.getEvents())
    //     if(localStorage.getItem('token')!==null){
    //       const token = localStorage.getItem("token")
    //       dispatch(userActions.VerificateToken(token))
    },[reload]
// }
    )

    function reloadChanger() {
        setReload(!reload);
    }
    

    const allEvents = useSelector(store => store.eventsReducer.events)
    // console.log(allEvents)

    return (
        <View>
        <Text>Nuestros eventos</Text>
        {allEvents?.length > 0 ? (
            <View>
                <Gallery allEvents={allEvents} setChangeReload={reloadChanger}/>
            </View>
        ) : (
            <NoEvents/>
        ) }
        </View>
    );
}
export default Events;