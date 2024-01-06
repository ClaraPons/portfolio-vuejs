const contact = async ({firstName, lastName, email, message }) => {
    const body = { firstName, lastName, email, message }
    const request = await fetch(
        `${import.meta.env.VITE_APP_API_URL}`,
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