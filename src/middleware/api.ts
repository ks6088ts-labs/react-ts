/* eslint-disable no-console */
async function getToken(url: string) {
    const res = await fetch(url);
    const json = await res.json();
    if (!json) {
        throw ReferenceError('Empty response');
    }
    console.log(`json: ${JSON.stringify(json)}`);
    return json[0]['access_token'];
}

async function callApi(url: string, token: string) {
    await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((resp) => {
            resp.text().then(function (respStr) {
                console.log(`success: ${respStr}`);
            });
        })
        .catch((error) => {
            console.log(error);
        });
}

export async function main() {
    // ---
    // [For local test]
    //  1. Access https://YOURAPP.azurewebsites.net/.auth/me to get `access_token`
    //  2. Overwrite `access_token` in assets/auth.json to the one obtained at step1
    //  3. Run json server locally via `npx json-server --watch assets/auth.json --port 3001`
    //  4. Overwrite the following `authUrl` to `http://localhost:3001/items`
    // [For deployment]
    //  1. Update authUrl and apiUrl
    // ---
    const authUrl = 'https://YOURAPP.azurewebsites.net/.auth/me'; // http://localhost:3001/items
    const token = await getToken(authUrl);
    console.log(`token: ${token}`);

    const apiUrl =
        'https://YOURFUNC.azurewebsites.net/api/YOURFUNC?code=YOURCODE';
    callApi(apiUrl, token);
}
/* eslint-enable no-console */
