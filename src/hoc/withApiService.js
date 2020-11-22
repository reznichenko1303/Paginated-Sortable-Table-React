import ApiContext from "../apiContext/apiContext";
import React from "react";

const withApiService = (Wrapped) => () => {
    return (
        <ApiContext.Consumer>
            {value => <Wrapped apiService={value} />}
        </ApiContext.Consumer>
    )
}

export default withApiService
