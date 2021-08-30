import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import MSText from './MSText'

export default ({ URL, title, body, callback }) => (
    <TouchableOpacity style = {{ marginVertical: 10, padding: 20, backgroundColor: 'white', borderRadius: 10, elevation: 2 }}
    onPress = { callback }>

        <Image style = {{ flex: 1, aspectRatio: 1.5, borderRadius: 5 }} source = {{
            uri: URL
        }}/>

        <MSText msstyle = {{ marginTop: 20, textAlign: 'center' }} mstext = { title } mslines = { 2 }/>

        <MSText msstyle = {{ textAlign: 'center', marginTop: 5, fontSize: 12, color: 'gray' }} mstext = { body } mslines = { 3 }/>

    </TouchableOpacity>
)
