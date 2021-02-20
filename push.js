const push = require('web-push')


let vapidKeys = {
    publicKey: 'BJHgyS6j49iLiYTO2w5m6gZsXg6LN4mVGk-_09blFxtgTjjs2rUlSVCuGvnp8BHsLXF62bLga2rhaAeHYKWwL9I',
    privateKey: 'fpbpbIZRyCYE8icRWF26tHg5y9o6jjEPENcL8JcCgZU'
}

push.setVapidDetails('mailto:test@stebilisim.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/crTGUyDOc7w:APA91bHAps_bGIfK-HMe41aDxt7C2s-wwOacARNd9sOlw54RcKNKhfuFEAiLkXhLV79F3ZY1EnLuSSNCtYLj3TLmrfKhZCzfz9BMFL6akNzpDtdQ_KvYxtazyUcdfn7Ya-KIpYRX4Dg3",
    "expirationTime": null,
    "keys": {
        "p256dh": "BF3PqnMJcMWDX3IHZGQDtLEVyZ3w0_7FH_7ka5cSL-2dzFrRp4Cl1d5EdpI1cNiomkqWIq6xqHWMWvaadv3DKNk",
        "auth": "x44Vdm8d1qTJN3fF9f33zw"
    }
};

push.sendNotification(sub, 'test mesajı')

// let vapidKeys = push.generateVAPIDKeys();
//
//
// console.log(vapidKeys);
