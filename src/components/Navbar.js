import React from 'react';

const componentName = ({
    children, style, ...rest
}) => (
    <View style={style}>
        {children}
    </View>
);

export default componentName;
