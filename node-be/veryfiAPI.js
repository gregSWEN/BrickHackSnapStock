const Client = require('@veryfi/veryfi-sdk');
const client_id = 'vrfgHa9hlcXwFKXMOTtFhEWv7wb01yR1a6RhFfP';
const client_secret = '4OTbf79OkB8yOzrZ3bIyHLDr3wdvNtSEFfCe4leASRTJX1T88c3X0I3kW7TLwHTyTWjUMCs7yV7PP3ubAh69XZFVoHBlFC4cHx9vjUNDiIXuyO3CPrJ6EEbY4evrmmD2';
const username = 'kgg6377';
const api_key = '3eab1911e4604b5dc139a43a88a3f37c';

const cat = ['Grocery'];

const veryfi_client = new Client(client_id, client_secret, username, api_key);

function TestVeryfi(filePath) {
    return veryfi_client.process_document(filePath, categories = cat)
}

function ParseResponse(jsonResponse){
    return JSON.parse(jsonResponse)
}

module.exports = {TestVeryfi, ParseResponse}