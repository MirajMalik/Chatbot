export async function fetchMessages() {

    const response = await fetch(
        "../../messages.json"
    );

    const data = await response.json();
    console.log(data);

    return data;
}


