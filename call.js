const accountSid = 'AC789d4c412fd6578d774753707937db8b';
const authToken = 'b9b64a1dacafd3f1a8b8408ba5513e7f';
const client = require('twilio')(accountSid, authToken);

client.calls
  .create({
    url: 'http://demo.twilio.com/docs/voice.xml',
    to: '+14155551212',
    from: '+15017122661',
  })
  .then(call => process.stdout.write(call.sid));