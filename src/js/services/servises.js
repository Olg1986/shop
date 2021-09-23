const getResourse = async(url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw Error (`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
}

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        body: data
    })
    return await res.text();
    
}

export {getResourse, postData};