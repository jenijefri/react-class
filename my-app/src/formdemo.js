import React, { useState } from "react";

export default function FormDemo() {
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");

    const submit = (e) => {
        e.preventDefault();
        console.log("Values are:", username, pwd);
        alert(`Username: ${username}, Password: ${pwd}`);
    };

    return (
        <div className="style">
            This is FormDemo Component
            <form onSubmit={submit}>
                <div>
                    <label>
                        Username:{" "}
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:{" "}
                        <input
                            type="password"
                            name="password"
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}