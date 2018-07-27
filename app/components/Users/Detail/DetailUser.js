import React from 'react';
import { View } from 'react-native';
import styles from './styles';

import PropTypes from 'prop-types';

const DetailUser = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
};

DetailUser.propTypes = {
    children: PropTypes.any
};

export default DetailUser;
