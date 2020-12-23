import React, { useCallback } from 'react'
import { Image, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'
import TouchableWrapper from '../../components/global/layout/TouchableWrapper'
import DefaultPage from '../../components/global/layout/DefaultPage'
import Logo from '../../../assets/piano_violin.jpg'

const SceneSplash = ({ isUserLoggedIn, navigation }) => {
    const navigationTarget = isUserLoggedIn ? 'Home' : 'Login'

    useFocusEffect(
        useCallback(() => {
            const delayedNavigation = setTimeout(() => {
                navigation.navigate(navigationTarget)
            }, 2000)
            return () => clearTimeout(delayedNavigation)
        }, [])
    )
    return (
        <TouchableWrapper handlePress={() => navigation.navigate(navigationTarget)}>
            <DefaultPage>
                <Image
                    style={{ width: 150, height: 120 }}
                    source={Logo}
                />
                <View>
                    <Text style={{ fontSize: 23, marginTop: 80 }}>
                        by JoAnna Park
                    </Text>
                </View>
            </DefaultPage>
        </TouchableWrapper>
    )
}

SceneSplash.propTypes = {
    isUserLoggedIn: PropTypes.bool.isRequired,
    navigation: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    isUserLoggedIn: state.user.isLoggedIn,
})

export default connect(
    mapStateToProps,
)(SceneSplash)