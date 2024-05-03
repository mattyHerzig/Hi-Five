import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_700Bold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import UserPost from './userPost';
import PostItem from './postItem';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Feed = () => {

    let [fontsLoaded] = useFonts({
        Poppins_700Bold,
        Poppins_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }

    return (<View style={styles.container}>
        <View>
            <View style={styles.topBar}>
                <View style={styles.leftIcon}>
                    <TouchableOpacity onPress={() => console.log('you clicked the user button')}>
                        <FeatherIcon name='users' size={20} style={styles.iconTopStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('clicked playlist button')}>
                        <MatIcon name='playlist-music' size={20} style={styles.iconTopStyle} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.navTitle}>Hi-Five</Text>
                <TouchableOpacity onPress={() => console.log('clicked settings button')}>
                    <FeatherIcon name='settings' size={20} style={styles.iconTopStyle} />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <UserPost />
                <PostItem />
                <PostItem />
                <PostItem />
            </ScrollView>
        </View>
    </View>)
}

export default Feed;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#202020',
        alignItems: 'center',
    },
    feed_container: {

    },
    iconTopStyle: {
        justifyContent: "center",
        paddingVertical: 2,
        paddingHorizontal: 4,
        color: '#B2EED3'
    },
    topBar: {
        marginTop: 60,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginBottom: 10
    },
    navTitle: {
        color: '#B2EED3',
        fontSize: 20,
        fontFamily: 'Poppins_700Bold',
        paddingRight: 20
    },
    leftIcon: {
        flexDirection: 'row',
    }
});