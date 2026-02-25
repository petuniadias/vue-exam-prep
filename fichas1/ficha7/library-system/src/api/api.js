const BASE_URL = 'http://localhost:3000';

export async function request(url, options = {}) {
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options
    })

    if(!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`)
    }

    const text = await response.text()
    return text ? JSON.parse(text) : null
}

export async function get(endpoint) {
    const url = `${BASE_URL}${endpoint}`;
    return request(url);
}

export async function post(endpoint, data) {
    const url = `${BASE_URL}${endpoint}`
    return request(url, {
        method: 'POST',
        body: JSON.stringify(data)
    })
}

export async function put(endpoint, data) {
    const url = `${BASE_URL}${endpoint}`
    return request(url, {
        method: 'PUT',
        body: JSON.stringify(data)
    })
}

export async function del(endpoint) {
    const url = `${BASE_URL}${endpoint}`

    return request(url, {
        method: 'DELETE'
    })
}