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
    endpoint: "https://par02p.notify.windows.com/w/?token=BQYAAAA3L9cgy9Uac6BTOYHBJeR7UXlb8zv7XUUv3XJsxK13D1fmiXzKPD%2fWgn0jN%2brIbWYdAc7TtzWeAaNKS8GqDKL3IkW6oBuw%2f%2b4mgTYLqXZleiBs1aw9hXVRlF9ptuq0ivAME9bniGWCP8nCgSFJhYxFVurtJXBNPeII%2bExElo0e18a%2fK1TdIIu0oj%2b2BNLFVpiwP%2fgzMWVMfBjRkefsMeIikD9TZ1V3HEVlZ%2fxPZeTCAPICAIKUaMxyHn0jGUJRSjp7wtHBIxSKy9AZwuG1uLkYXM8uOZ4Dn%2b3EsOJVXEa4mCLzR8WNvl3cLaQrEG4%2faTssrhSxm5h7O2RbV5HcW69YMrPw9yTZ4AWOEoR0kwJzmw%3d%3d",
    expirationTime: null,
    keys: {
        p256dh: "BCAYZCywbkhr7GFWubm063Y2yDKDLkTFxFJGfI1q1StyicldpdFSvhT4ilev1pMqU6YJfVcF24EnCJLzHuZx-xQ",
        auth: "z4yue1uvBXwXhFrRtUMW7A"
    }
};

push.sendNotification(sub, 'test message');
