const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/current-user', (req, res) => {
        return res.send(req.user);
    });

    app.get('/api/logout', (req, res) => {
        req.logout()
        return res.send(req.user);
    });
}