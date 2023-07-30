import React, {useEffect, useState} from "react";

const OryRecovery = (ory, basePath) => {

    if (window.location.pathname === "/ory_recovery") {
        const [session, setSession] = useState("")
        const [logoutUrl, setLogoutUrl] = useState("")

        console.log("const ok")
        // Returns either the email or the username depending on the user's Identity Schema
        const getUserName = (identity) =>
            identity.traits.email || identity.traits.username
        console.log("get user ok")
        // highlight-end

        // highlight-start
        // Second, gather session data, if the user is not logged in, redirect to login
        useEffect(() => {
            ory
                .toSession()
                .then(({data}) => {
                    // User has a session!
                    setSession(data)
                    ory.createBrowserLogoutFlow().then(({data}) => {
                        // Get also the logout url
                        setLogoutUrl(data.logout_url)
                    })
                })
                .catch((err) => {
                    console.error(err)// Redirect to recovery page
                    if (window.location.pathname === "/ory_recovery") {
                        window.location.replace(`${basePath}/recovery`)
                    }
                })
        }, [])
        console.log("effects ok")
        if (!session) {
            // Still loading
            return <h1>Loading...</h1>
        }
        // highlight-end

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Welcome to Ory,{" "}
                        {
                            // highlight-next-line
                            getUserName(session?.identity)
                        }
                        .
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    {
                        // highlight-next-line
                        // Our logout link
                        <a href={logoutUrl}>Logout</a>
                    }
                </header>
            </div>
        )
    }

};

export default OryRecovery;