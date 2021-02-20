var push = require('web-push');

let vapidKeys = {
        publicKey: 'BEEIWUefs1gdbxuwNanLuzgAcbOI5Z4ekuRoq9qZ6sulBntqGCp3duNJVZdfQnu05egU3i-6Bivuh1_xCwAWkl8',
        privateKey: 'MkinUPCfSFzIfE62kJ6miaLQdhTHChcPzCxw-9-tHtk'
    };

push.setVapidDetails(
    'mailto:test@stebilisim.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

let sub = {
    endpoint: "https://fcm.googleapis.com/fcm/send/dUMntjXgYIQ:APA91bGaEOzp2-bP2CWsYV6_0v6UI9Kv3kOIKXndTRytlfCvgvktnO3DCLLWX-D6opOdLmY8-KCvTOwAHXlthBc_eV8LfoOJjSZ0zC_vLJXs7DWY4-eXok0GQ2wxmGyNk6vsSzRCnOtb",
    expirationTime: null,
    keys: {
        p256dh: "BN40QhRbJF0k1gSx-AGybZjYBfIZTEnhrJnEXnghUoP0OAtQAQRn1FvIqfMq70NrZ4D98OQmPY2iHLWOu9vLZWA",
        auth: "Zx9u9r7hSzCOuC8SZbqNNQ"
    }
};

push.sendNotification(sub, 'test message');
console.log(push.generateVAPIDKeys());
