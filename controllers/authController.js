var Usuario = require('../models/usuario');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;
opts.issuer = process.env.HOSTNAME;
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    Usuario.findOne({_id: jwt_payload.sub}, function(err, usuario) {
        if (err) {
            err.isOperacional = true;
            err.status = 401
            return done(err, false);
        }
        if (usuario) {
            return done(null, usuario);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

exports.login = function(req, res, next){
    console.log("Login ...");
    Usuario.findOne({email: req.body.email}, function(err, usuario){
        console.log("Gerando token ...");
        if(err){
            err.isOperacional = true;
            err.status = 401
            return next(err);
        }
        if(usuario){
            if(usuario.senha === req.body.password){
                var payload = {
                    iss: process.env.HOSTNAME,
                    sub: usuario._id
                };
                var options = {
                    expiresIn: 300
                };
                jwt.sign(payload, process.env.SECRET, options, function(err, token){
                    if(err){ return next(err);}
                    
                    res.status(200).json({auth:true, token: token});
                });
            }else{
                res.status(401).json({code:401, message:"Email ou senha estão incorretos.", error: true});
            }
        }else{
            res.status(404).json({code:404, message:"Usuário não cadastrado", error: true});
        }
    });
};

exports.passport = passport;