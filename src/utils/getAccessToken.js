const axios = require ("axios");

function getAccessToken() {
    const reqBody = {
        client_id: `${process.env.AUTH0_CLIENT_ID}`,
        client_secret: `${process.env.AUTH0_CLIENT_SECRET}`,
        audience: `${process.env.AUTH0_ISSUER_URL}api/v2/`,
        grant_type: "client_credentials"
    }

    axios.post(`${process.env.AUTH0_ISSUER_URL}oauth/token`, reqBody)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: err.message });
    })
}

module.exports = { getAccessToken }