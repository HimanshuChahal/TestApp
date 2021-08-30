import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import * as Font from 'expo-font'

const MSText = ({ msstyle, mstext, mslines }) => {

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
            <Text style = {[{ fontFamily: 'Montserrat-Light' }, msstyle]} numberOfLines = { mslines }>
                
                {mstext}

            </Text>
        ) : (
            <Text style = { msstyle } numberOfLines = { mslines }>

                {mstext}

            </Text>
        )
    )

}

export default MSText
