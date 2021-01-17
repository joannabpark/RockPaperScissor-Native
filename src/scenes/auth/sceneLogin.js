import React, { useState } from 'react'
import {
    View, Text, TextInput, StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { userLogin } from '../../redux/actions/user.actions'
import BackgroundPage from '../../components/global/layout/BackgroundPage'
import backgroundImage from '../../../assets/e9edf6.png'
import TextButton from '../../components/global/ui/TextButton'
import { showMessage } from "react-native-flash-message";

const SceneLogin = ({ loginUser, isUserLoggedIn, storedUserName }) => {
    const [name, setName] = useState('')

    return (
        <BackgroundPage background={backgroundImage}>
            <View style={styles.container}>
                <Text style={styles.headline}>
                    Enter your name:
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setName(text)}
                    value={name}
                />
                <TextButton
                    title="Login"
                    type="primary"
                    onPress={() => loginUser(name || 'player')}
                />

                { isUserLoggedIn ? 
                showMessage({
                    message: `WELCOME, ${storedUserName.toUpperCase()}!`,
                    backgroundColor: "hotpink",
                    color: "black",
            }) : undefined}

            </View>

        </BackgroundPage>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'gray',
        backgroundColor: 'white',
        borderWidth: 3,
        padding: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headline: {
        fontWeight: 'bold',
        color: 'hotpink',
        fontSize: 23,
    },
    input: {
        height: 50,
        width: 200,
        borderColor: 'gray',
        backgroundColor: 'lightgray',
        borderWidth: 3,
        borderRadius: 3,
        padding: 10,
        margin: 10,
        fontSize: 18,
    },
})

SceneLogin.defaultProps = {
    storedUserName: '',
}

SceneLogin.propTypes = {
    loginUser: PropTypes.func.isRequired,
    isUserLoggedIn: PropTypes.bool.isRequired,
    storedUserName: PropTypes.string,
}

const mapStateToProps = (state) => ({
    storedUserName: state.user.name,
    isUserLoggedIn: state.user.isLoggedIn,
})

const mapDispatchToProps = (dispatch) => ({
    loginUser: (name) => dispatch(userLogin({ name })),
})

export default connect(mapStateToProps, mapDispatchToProps)(SceneLogin)