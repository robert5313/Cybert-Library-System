const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Router = require('express');
const User = require('../models/user');

const router = Router();

router.post('/register', async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let name = req.body.name;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt) 

    const record = await User.findOne({email: email})
    if (record) {
        return res.status(400).send({
            message: 'Email is already registered'    
        });
    } else {
        const user = new User({
            name: name,
            email: email,
            password: hashedPassword
    });

    const result = await user.save();

    //JWT Token

    const {_id} = await result.toJSON()

    const token = jwt.sign({_id:_id},"secret")

    res.cookie("jwt", token,{
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
    })

    res.send({
        message: "success"
    });

    // user.password = await bcrypt.hash(user.password, 10);

    // user.save()
    //     .then(() => {
    //         res.status(201).json({ message: 'User created successfully' });
    //     })
    //     .catch((err) => {
    //         res.status(500).json({ error: err });
    //     });
}
 });

router.get('/user',async (req, res) => {
    try {
        const cookie = req.cookies['jwt']

        const claims = jwt.verify(cookie, "secret")

        if (!claims) {
            return res.status(401).send({
                message: "unauthenticated"
            })
        }
        const user = await User.findOne({_id: claims._id})

        const {password, ...data} = await user.toJSON()
        res.send(data)

    }catch (err) {
        return res.status(401).send({
            message: "unauthenticated"
        })

    }
})


router.post('/login', async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    const user = await User.findOne
    ({email: email});
    if (!user) {
        return res.status(400).send({
            message: 'Email is not registered'
        });
    } else {
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).send({
                message: 'Password is not valid'
            });
        } else {
            const {_id} = await user.toJSON()

            const token = jwt.sign({_id:_id},"secret")

            res.cookie("jwt", token,{
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
            })

            res.send({
                message: "success"
            });
        }
    }
    });


router.get('/user', async (req, res) => {
    res.send('User route')
});


module.exports = router;