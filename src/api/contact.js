const contact = async ({firstName, lastName, email, message }) => {
    const body = { firstName, lastName, email, message }
    const request = await fetch(
        `https://portfolio-back-w9y9.onrender.com/api/contact`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        }
    )
    const response = await request.json()
    return response
}

export { contact }