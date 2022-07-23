import { View, Image, Text } from 'react-native'
// import ModalEvent from './ModalEvent'

export default function Gallery({ allEvents , setChangeReload }) {

return (
    <View>
        {allEvents.map((everyEvent, i) => (
            // console.log(everyEvent)
            <View style={{height:40, width:40 }} key={i}>
                <Image style={{height:40, width:40}} source={{ uri:everyEvent.images[0] }} />
                {/* <p className="text-carousel"> */}
                    {/* <ModalEvent everyEvent={everyEvent} setChangeReload={setChangeReload} /> */}
                    {/* </p> */}
            </View>
        ))}
    </View>
    );
}

