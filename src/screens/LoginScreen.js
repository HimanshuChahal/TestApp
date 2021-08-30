import React, { useState, useContext, useEffect } from 'react'
import { View, StatusBar, TouchableOpacity } from 'react-native'
import MSTextInput from '../components/MSTextInput'
import MSText from '../components/MSText'
import { Context as DetailContext } from '../context/DetailsContext'

const LoginScreen = () => {

    const { state: detailState, login } = useContext(DetailContext)

    const [ phoneNumber, setPhoneNumber ] = useState('')

    const [ correctNumber, setCorrectNumber ] = useState(false)

    useEffect(() => {

        setCorrectNumber(true)

    }, [ phoneNumber ])

    return (
        <View style = {{ flex: 1, backgroundColor: 'white', marginTop: StatusBar.currentHeight, justifyContent: 'center' }}>

            <MSText msstyle = {{ alignSelf: 'center', fontSize: 20 }} mstext = 'TestApp login'/>

            <MSTextInput msstyle = {{ marginTop: 40, marginHorizontal: 20, padding: 15, backgroundColor: '#F9F9F9', borderRadius: 10, fontSize: 16 }} value = { phoneNumber } onChangeText = { setPhoneNumber }
            msplaceholder = 'Phone number' keyboardType = 'numeric' maxLength = { 10 }/>

            { !correctNumber ? (
                    <MSText msstyle = {{ marginVertical: 10, fontSize: 12, color: 'red', alignSelf: 'center' }}
                    mstext = 'Incorrect number'/>
                ) : (
                    detailState.error_message !== null ? (
                        <MSText msstyle = {{ marginVertical: 10, fontSize: 12, alignSelf: 'center',
                        color: detailState.error_message === 'Authenticating.....' ? 'green' : 'red' }}
                        mstext = { detailState.error_message }/>
                    ) : null
                ) }

            <TouchableOpacity style = {{ width: 150, alignSelf: 'center', paddingVertical: 15, marginTop: 20,
            borderRadius: 20, backgroundColor: 'black' }}
            onPress = {() => {

                if(phoneNumber.length !== 10 || ![ ...phoneNumber ].every((value) => !Number.isNaN(Number(value))) || phoneNumber[0] === '0')
                {
                    setCorrectNumber(false)

                    return
                }

                login(phoneNumber)

            }}>

                <MSText msstyle = {{ alignSelf: 'center', fontSize: 16, color: 'white' }} mstext = 'Login'/>

            </TouchableOpacity>

        </View>
    )

}

export default LoginScreen
