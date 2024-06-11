const {generateSecret, exportJWK, importJWK, SignJWT} = require('jose');
const express = require('express');
const app = express();
const port = 3000;

let jwk;

// Generate a symmetric key
async function generateSymmetricKey() {
  const key = await generateSecret('HS256');
  const jwk = await exportJWK(key);
  jwk.alg = 'HS256';
  jwk.use = 'sig';
  jwk.kid = 'sim2'; // Add a key ID
  console.log('Generated JWK:', jwk);
  return jwk;
}
var jwt;
// Signing the JWT
async function signJWT(jwk, payload) {
  const key = await importJWK(jwk, 'HS256');
  jwt = await new SignJWT(payload)
    .setProtectedHeader({alg: 'HS256', kid: jwk.kid})
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(key);
  console.log('Signed JWT:', jwt);
  return jwt;
}

// Define the payload
const payload = {
  sub: '1234567890',
  name: 'John Doe',
  admin: true,
  iss: 'your_issuer',
  aud: 'your_audience',
};

// Generate the JWK and sign the JWT
generateSymmetricKey().then(generatedJwk => {
  jwk = generatedJwk;

  // Define the JWK endpoint
  app.get('/api/keys.json', (req, res) => {
    res.json({keys: [jwk]});
  });

  app.post('/api/tokens', async (req, res) => {
    const newToken = await signJWT(jwk, payload);
    res.json({jwt: newToken});
  });

  app.get('/api/profile', (req, res) => {
    res.json({id: 1, name: 'John Doe', email: 'john.doe@email.com'});
  });

  // Start the Express server
  app.listen(port, () => {
    console.log(`Bassel JWK server running at http://localhost:${port}`);
  });

});
