import React, { Fragment, useContext } from 'react';
import Context from '../store/context';

const ShowData = () => {
    const { state } = useContext(Context);
    return (
        <Fragment>
            <p>{state.value}</p>
        </Fragment>
    );
}

export default ShowData;
