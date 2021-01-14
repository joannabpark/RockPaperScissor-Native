import React from 'react'
import PropTypes from 'prop-types'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native'

const TextButton = ({
    title,
    onPress,
    type,
}) => (
    <TouchableOpacity onPress={() => onPress()}>
        <View style={{ ...styles.baseButton, ...styles[`${type}Button`] }}>
            <Text style={{ ...styles.baseText, ...styles[`${type}Text`] }}>
                {title}
            </Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    baseButton: {
        borderWidth: 3,
        borderRadius: 8,
        padding: 12,
        overflow: 'hidden',
    },
    baseText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    defaultButton: {
        backgroundColor: '#ccc',
        borderColor: '#666',
    },
    defaultText: {
        color: '#000',
    },
    primaryButton: {
        backgroundColor: 'hotpink',
        borderColor: 'grey',
    },
    primaryText: {
        color: 'white',
    },
    secondaryButton: {
        backgroundColor: 'hotpink',
        borderColor: 'grey',
        margin: 10
    },
    secondaryText: {
        color: 'white',
    },
    successButton: {
        backgroundColor: 'green',
        borderColor: 'darkgreen',
    },
    successText: {
        color: '#fff',
    },
    warningButton: {
        backgroundColor: 'red',
        borderColor: 'darkred',
    },
    warningText: {
        color: '#fff',
    },
})

TextButton.defaultProps = {
    onPress: undefined,
    type: 'default',
}

TextButton.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    type: PropTypes.oneOf([
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
    ]),
}

export default TextButton