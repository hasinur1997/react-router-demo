import { Redirect } from "react-router-dom"

const withAuth = (Component) => {
    const AuthRoute = () => {
        const isAuth = !!localStorage.getItem("token")

        if (isAuth) {
            return <Component/>
        }

        return <Redirect to="/" />
    }

    return AuthRoute
}

export default withAuth