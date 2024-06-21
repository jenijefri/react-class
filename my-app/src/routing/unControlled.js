import React, { useRef } from "react";

export default function UnControlled() {
    // const [username, setUsername] = useState("");
    // const [pwd, setPwd] = useState("");
    const usernameRef = useRef (null);
    const pwdRef = useRef(null);

    const submit = (e) => {
        e.preventDefault();
        console.log("Values are:", usernameRef.current.value,pwdRef.current.value);

    };

    return (
        <div className="style">
            This is Uncontrolled Component
            <form onSubmit={submit}>
                <div>
                    <label>
                        Username:{" "}
                        <input
                            type="text"
                            name="username"
                            // value={username}
                            ref={usernameRef}
                            // onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <br/>

                </div>
                <div>
                    <label>
                        Password:{" "}
                        <input
                            type="password"
                            name="password"
                            ref={pwdRef}
                            // value={pwd}
                            // onChange={(e) => setPwd(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}