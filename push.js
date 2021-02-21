const push = require('web-push');

let vapidKeys = {
    publicKey: 'BEEIWUefs1gdbxuwNanLuzgAcbOI5Z4ekuRoq9qZ6sulBntqGCp3duNJVZdfQnu05egU3i-6Bivuh1_xCwAWkl8',
    privateKey: 'MkinUPCfSFzIfE62kJ6miaLQdhTHChcPzCxw-9-tHtk'
};

push.setVapidDetails(
    'mailto:test@stebilisim.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dzSpcHIaWHQ:APA91bHyvln79mrktdYgNjXQi4OK3U4WZ1utF3bvrHM40X7EvDx4TMlfrVmnu-6AIU-MSOBhY_g0WsOHc3Fql2NzJnEUljeLvzTIWSxAZYaAc1u-2EZTK2gz6B7NNHu9jS1ouXQK-MhK","expirationTime":null,"keys":{"p256dh":"BNSAI4jaw2dlIcUN-JSQDM55VZxuIwAz5F_t1kJyv6dl8Pw5lsD-yhVFhxW4Ds-4nirTczoKgLQSfVpZMn4OiE4","auth":"D7ALHKLXgR8a5CKrB8_vTg"}};

push.sendNotification(sub, 'test message');
