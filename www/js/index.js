App.controller('home', function(page) {

});

App.controller('about', function(page) {
    // put stuff here
});

App.controller('skills', function(page) {
    // put stuff here
});
App.controller('work', function(page) {
    // put stuff here
});



try {
    App.restore();
} catch (err) {
    App.load('home');
}