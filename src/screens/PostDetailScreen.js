import React, { useState } from 'react'
import { ScrollView, TouchableOpacity, Image, useWindowDimensions, View } from 'react-native'
import MSText from '../components/MSText'

const PostDetailScreen = ({ route }) => {

    const [ fullScreen, setFullScreen ] = useState(false)

    const { width } = useWindowDimensions()

    return (
        <View style = {{ flex: 1, backgroundColor: 'white' }}>

            <ScrollView>

                <TouchableOpacity onPress = {() => setFullScreen(true)}>

                    <Image style = {{ width: width - 40, margin: 20, aspectRatio: 1, borderRadius: 15 }} source = {{
                        uri: route.params.post_details.URL
                    }}/>

                </TouchableOpacity>

                <MSText msstyle = {{ fontSize: 19, textAlign: 'center', marginHorizontal: 20 }} mstext = { route.params.post_details.title }/>

                <MSText msstyle = {{ textAlign: 'center', margin: 20 }} mstext = { route.params.post_details.body }/>

            </ScrollView>

            { fullScreen ? (
                    <TouchableOpacity style = {{ position: 'absolute', width: '100%', height: '100%' }} onPress = {() => setFullScreen(false)}>

                        <Image style = {{ width: '100%', height: '100%', alignSelf: 'center', backgroundColor: 'black' }} resizeMode = 'contain' source = {{
                            uri: route.params.post_details.URL
                        }}/>

                    </TouchableOpacity>
                ) : null }
            
        </View>
    )

}

export default PostDetailScreen
