import React from 'react'
import { Image, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userLogout } from '../../redux/actions/user.actions'
import TextButton from '../../components/global/ui/TextButton'
import IconButton from '../../components/global/ui/IconButton'
import BackgroundPage from '../../components/global/layout/BackgroundPage'
import backgroundImage from '../../../assets/e9edf6.png'
import logo from '../../../assets/textbubble.jpg'
// import VersionTag from '../../components/other/VersionTag'

const SceneHome = ({ logout, navigation }) => (
    <BackgroundPage background={backgroundImage}>
        <Image
            source={logo}
            style={styles.logo}
        />
        <IconButton
            icon="⚙️"
            size={42}
            customStyles={styles.buttonSettings}
            onPress={() => navigation.navigate('Settings')}
        />
        <IconButton
            icon="❌"
            size={30}
            customStyles={styles.buttonExit}
            onPress={logout}
        />
        <Text style={styles.rule}>
            Type as many words as you can before time runs out.
        </Text>
        <TextButton
            title="Start"
            type="primary"
            onPress={() => navigation.navigate('GameHome')}
        />
        {/* <View style={styles.versionTag}>
            <VersionTag />
        </View> */}
    </BackgroundPage>
)

const styles = StyleSheet.create({
    rule: {
        marginBottom: 40,
        fontSize: 30,
        textAlign: 'center',
        padding: 10,
        color: 'hotpink'
    },
    logo: {
        width: 215,
        height: 230,
        marginBottom: 50,
    },
    buttonSettings: {
        position: 'absolute',
        top: 10,
        left: 10,
    },
    buttonExit: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
    versionTag: {
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
})

SceneHome.propTypes = {
    navigation: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
    logout: (name) => dispatch(userLogout({ name })),
})

export default connect(
    null,
    mapDispatchToProps,
)(SceneHome)