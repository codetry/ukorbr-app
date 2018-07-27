import React from 'react';
import { View } from 'react-native';
import styles from './styles';

import PropTypes from 'prop-types';

const ListUsers = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
};

ListUsers.propTypes = {
    children: PropTypes.any
};

export default ListUsers;
