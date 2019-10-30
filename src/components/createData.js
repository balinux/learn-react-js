import React, { Fragment, useContext } from 'react';
import Context from '../store/context';
const CreteData = () => {
    const { state, actions } = useContext(Context);

    return (
        <Fragment>
            <form action="SUBMIT">
                <input
                    type="text"
                    value={state.value}
                    onChange={e =>
                        actions({
                            type: "setState",
                            payload: { ...state, value: e.target.value }
                        })
                    }
                />
            </form>


        </Fragment>
    );
}

export default CreteData;
