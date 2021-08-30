import React, { useState, useEffect, useContext, useRef } from 'react'
import { View, FlatList } from 'react-native'
import { Context as DetailContext } from '../context/DetailsContext'
import PostsDataComponent from '../components/PostsDataComponent'

const PostScreen = ({ navigation }) => {

    const { state: detailState, getPostsData } = useContext(DetailContext)

    const [ items, setItems ] = useState(10)

    const flatListref = useRef(null)

    useEffect(() => {

        getPostsData()

    }, [])

    return (
        <View style = {{ flex: 1 }}>

            <FlatList style = {{ margin: 20 }}
            ref = { flatListref }
            data = { detailState.posts_data.slice(0, items) }
            keyExtractor = {(item, index) => index.toString()}
            renderItem = {(item) => {
                
                return (
                    <PostsDataComponent URL = 'https://th.bing.com/th/id/R.a4df78602df4e1d58a64438f188c0ad7?rik=QIKhJ4D0AbkbbQ&riu=http%3a%2f%2fwww.gamereactor.eu%2fmedia%2f97%2fplanetside2amerish_609701b.jpg&ehk=rF48ztMxTs8w5KJ%2bvr%2b6w0CuCq6OKaljWs7WknFrxow%3d&risl=&pid=ImgRaw&r=0' title = { item.item.title } body = { item.item.body }
                    callback = {() => navigation.navigate('PostDetail', { post_details: { ...item.item, URL: 'https://th.bing.com/th/id/R.a4df78602df4e1d58a64438f188c0ad7?rik=QIKhJ4D0AbkbbQ&riu=http%3a%2f%2fwww.gamereactor.eu%2fmedia%2f97%2fplanetside2amerish_609701b.jpg&ehk=rF48ztMxTs8w5KJ%2bvr%2b6w0CuCq6OKaljWs7WknFrxow%3d&risl=&pid=ImgRaw&r=0' } })}/>
                )

            }}
            onEndReached = {() => {
                setItems(items <= 40 ? items + 10 : null)
            }}
            onEndReachedThreshold = { 0.1 }/>

        </View>
    )

}

export default PostScreen
