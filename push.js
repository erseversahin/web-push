const push = require('web-push')


let vapidKeys = {
    publicKey: 'BJHgyS6j49iLiYTO2w5m6gZsXg6LN4mVGk-_09blFxtgTjjs2rUlSVCuGvnp8BHsLXF62bLga2rhaAeHYKWwL9I',
    privateKey: 'fpbpbIZRyCYE8icRWF26tHg5y9o6jjEPENcL8JcCgZU'
}

push.setVapidDetails('mailto:test@stebilisim.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/eh-rA_5tfgI:APA91bEAPVLh-9kf4dCvv0Z7l91tugh8xyOWCfi6tKvLe_62w-qX8OWPiWOSEFGM6tguWZcyJaTaSx6VO5A6Ex9ypFqbIYO_4BYWEQIlgfqESH9zKoyST9ILxvrRIachODf38lROGJsm","expirationTime":null,"keys":{"p256dh":"BCekClKOiOrYTE1gCO1gvs2afJjM9q-xyIMfwcFVL-FFBjtXdr1oJ8NRNqnqedKAfWuQZFsvVt1NbbaOEfSvRA0","auth":"h5GeeZw-uTAkTbw73IcegA"}};

push.sendNotification(sub, 'test mesajı')

// let vapidKeys = push.generateVAPIDKeys();
//
//
// console.log(vapidKeys);
