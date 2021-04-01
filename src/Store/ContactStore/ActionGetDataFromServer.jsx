let initData = require('../../serverData.json');

export default function GetDataFromServer() {
    return dispatch => {
        setTimeout(() => {
            fetch('../serverData.json').then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            })
                .then((responseJson) => {
                    console.log(responseJson);
                })
                .catch(() => {
                    dispatch({ type: 'GET_DATA_FROM_SERVER', payload: initData })
                });
        }, 2000)
    }
}





