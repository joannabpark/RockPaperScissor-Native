import React from 'react'
import { Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextButton from '../../components/global/ui/TextButton'
import IconButton from '../../components/global/ui/IconButton'
import BackgroundPage from '../../components/global/layout/BackgroundPage'
import backgroundImage from '../../../assets/e9edf6.png'
import logo from '../../../assets/logo.png'

const SceneHome = ({ navigation }) => (
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
        <TextButton
            title="Go to game"
            type="primary"
            onPress={() => navigation.navigate('GameHome')}
        />
    </BackgroundPage>
)

const styles = StyleSheet.create({
    logo: {
        width: 215,
        height: 230,
        marginBottom: 50,
    },
    buttonSettings: {
        position: 'absolute',
        top: 10,
        left: 10,
    }
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