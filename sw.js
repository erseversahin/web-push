self.addEventListener('push', function(e) {
    console.log(e);
    var options = {
        body: 'Bildirim gönderildi.',
        icon: 'https://lh4.googleusercontent.com/-EqAixZbbpBQ/AAAAAAAAAAI/AAAAAAAAAAA/8SAxuWyojqk/s44-p-k-no-ns-nd/photo.jpg',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore',
                title: 'Explore this new world',
                icon: 'images/checkmark.png'
            },
            { action: 'close', title: 'Close', icon: 'images/xmark.png' }
        ]
    };
    e.waitUntil(self.registration.showNotification('Bize Katıl!', options));
});
