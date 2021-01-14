
import React from 'react'
import { Button, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import DefaultPage from '../../components/global/layout/DefaultPage'
import { connect } from 'react-redux'
import TextButton from '../../components/global/ui/TextButton'
import { userLogout } from '../../redux/actions/user.actions'

const SceneSettings = ({ logout, navigation, storedUserName }) => (
    <DefaultPage>
        <Text style={styles.text}>
            My Username: {storedUserName}
        </Text>
        <TextButton 
            title="Back to Game" 
            type="secondary"
            onPress={() => navigation.goBack()} 
        />
        <TextButton
            title="Logout"
            type="secondary"
            onPress={logout}
        />
    </DefaultPage>
)

const styles = StyleSheet.create({
    text: {
        textAlign: 'center', 
        fontSize: 30, 
        color: 'hotpink',
        marginBottom: 200,
    }
})

SceneSettings.propTypes = {
    navigation: PropTypes.object.isRequired,
    storedUserName: PropTypes.string,
    logout: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    storedUserName: state.user.name,
})


const mapDispatchToProps = (dispatch) => ({
    logout: (name) => dispatch(userLogout({ name })),
})

export default connect(mapStateToProps, mapDispatchToProps)(SceneSettings)