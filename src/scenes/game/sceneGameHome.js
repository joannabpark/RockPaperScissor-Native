import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import BackgroundPage from '../../components/global/layout/BackgroundPage'
import TypeWordPage from '../../components/other/TypeWordPage'
import IconButton from '../../components/global/ui/IconButton'
import backgroundImage from '../../../assets/e9edf6.png'

const SceneGameHome = ({ navigation }) => (
    <BackgroundPage background={backgroundImage}>
        <View style={styles.contentBox}>
            <TypeWordPage navigation={navigation}/>
            <IconButton
                icon="🔙"
                size={30}
                customStyles={styles.buttonExit}
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    </BackgroundPage>
)

const styles = StyleSheet.create({
    contentBox: {
        width: '100%',
        flex: 1,
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonExit: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
})

SceneGameHome.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SceneGameHome