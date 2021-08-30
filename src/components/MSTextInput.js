import React, { useState, useEffect } from 'react'
import { TextInput } from 'react-native'
import * as Font from 'expo-font'

const MSTextInput = ({ msstyle, value, onChangeText, mslines, msplaceholder, keyboardType, maxLength }) => {

    const [ fontLoaded, setFontLoaded ] = useState(false)

    const addFont = async () => {
        await Font.loadAsync({
            'Montserrat-Light': require('../../assets/fonts/Montserrat-Light.ttf')
        })

        setFontLoaded(true)
    }

    useEffect(() => {
        
        addFont()

    }, [])

    return ( fontLoaded ? (
            <TextInput style = {[{ fontFamily: 'Montserrat-Light' }, msstyle]} value = { value } onChangeText = { onChangeText } placeholder = { msplaceholder } keyboardType = { keyboardType } maxLength = { maxLength } numberOfLines = { mslines }/>
        ) : (
            <TextInput style = { msstyle } value = { value } onChangeText = { onChangeText } placeholder = { msplaceholder } keyboardType = { keyboardType } maxLength = { maxLength } numberOfLines = { mslines }/>
        )
    )

}

React.defaultProps = () => {
    return {
        numberOfLines: 0,
        maxLength: 10
    }
}

export default MSTextInput
