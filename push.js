const push = require('web-push')


let vapidKeys = {
    publicKey: 'BJHgyS6j49iLiYTO2w5m6gZsXg6LN4mVGk-_09blFxtgTjjs2rUlSVCuGvnp8BHsLXF62bLga2rhaAeHYKWwL9I',
    privateKey: 'fpbpbIZRyCYE8icRWF26tHg5y9o6jjEPENcL8JcCgZU'
}

push.setVapidDetails('mailto:test@stebilisim.com',vapidKeys.publicKey,vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test mesajı')

// let vapidKeys = push.generateVAPIDKeys();
//
//
// console.log(vapidKeys);
