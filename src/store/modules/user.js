import { reactive } from 'vue';
import api from '@/api'

const EMPTY_SESSION = () => ({
    username: null,
    scope: '',
    expires: 0,
    access_token: '',
    refresh_token: '',
    authorities: [],
    token_type: 'Bearer',
    jti: '',
    rememberMe: false,
    language: ''
})

const EMPTY_ACCOUNT = () => ({
    id: null,
    username: null,
})

const state = reactive({
    session:
        // assign(target, source)
        api.option.hasSession() ?
        Object.assign(EMPTY_SESSION(), api.option.getSession()) :
        EMPTY_SESSION,
    account:
        EMPTY_ACCOUNT
})