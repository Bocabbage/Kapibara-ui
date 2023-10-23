const LOCAL_SESSION_KEY = 'Client-Session'
export default {
    setSession(session) {
        if(session.remeberMe)
        {
            localStorage.setItem(LOCAL_SESSION_KEY, json.stringify(session))
        }
        else
        {
            sessionStorage.setItem(LOCAL_SESSION_KEY, json.stringify(session))
        }
    },

    getSession() {
        try
        {
            return JSON.parse(sessionStorage.getItem(LOCAL_SESSION_KEY) || localStorage.getItem(LOCAL_SESSION_KEY))
        } catch (e) {
            return {}
        }
    },

    removeSession() {
        sessionStorage.removeItem(LOCAL_SESSION_KEY)
        localStorage.removeItem(LOCAL_SESSION_KEY)
    },

    hasSession() {
        return !!(sessionStorage.getItem(LOCAL_SESSION_KEY) || localStorage.getItem(LOCAL_SESSION_KEY))
    },

    isSessionAvailable () {
        return this.hasSession() && this.getSession().expires > new Date().getTime()
    },

}