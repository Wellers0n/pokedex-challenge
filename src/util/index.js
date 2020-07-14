import croct from '@croct/plug'
import { issueToken, callApiToGenerateToken } from './../services/api';
import constants from './../constants'

export function plug(appId, token) {
    croct.plug({
        appId: appId,
        token: token,
        debug: true, // Show debug info on console
    })
}

export async function connectCroctPlug() {
    const responseToken = await issueToken();
    plug(constants.APP_ID, responseToken)

}

export async function connectCroctPlugWithToken(state) {
    const { email } = state.auth.token.payload
    const tokenStorage = localStorage.getItem('token');
    if (!tokenStorage) {
        const responseToken = await callApiToGenerateToken(email);
        croct.setToken(responseToken)
        return plug(constants.APP_ID, responseToken)

    } else {
        return plug(constants.APP_ID, tokenStorage)
    }
}