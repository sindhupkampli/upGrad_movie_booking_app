const User = require('../models/user.model');
const b2a = require('b2a')
const { uuid } = require('uuidv4');
const TokenGenerator = require('uuid-token-generator');

exports.signUp = async (req, res) => {
    try {
        const { email_address, first_name, last_name, mobile_number, password } = req.body;
        const encryptPassword = b2a.btoa(password)
        
        const newUser = new User({
            email:email_address,
            first_name:first_name,
            last_name:last_name,
            username:first_name + last_name,
            contact:mobile_number,
            password:encryptPassword,
            role:"user",
            isLoggedIn: false,
            uuid: '',
            accesstoken: '',
            coupons: [],
            bookingRequests: []
        });
        const savedUser = await newUser.save();
      
        res.status(201).json({ message: 'User Created Successfully', user: savedUser });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Server Encountered an Internal Error' });
    }
};

exports.login = async (req, res) => {
    try {
        const reqHeader = req.headers['Authorization'];
        const base64Credentials = authHeader.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [username, password] = credentials.split(':');
        const newUUID=uuid()
        const token = new TokenGenerator();
        const newToken=token.generate()
        const user = await User.findOne({ username:username });
        if (user) {
            const dbPassword = b2a.atob(user.password)
            if(dbPassword==password){
                user.isLoggedIn = true;
                user.uuid = newUUID;
                user.accesstoken = newToken;
                const currentUser = await user.save();
                res.status(200).json({ message: 'Login successful', currentUser });
            }else {
                res.status(404).json({ message: 'Invalid Username or Password' });
            }
           
        } else {
            res.status(404).json({ message: 'Invalid User' });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Server Encountered an Internal Error' });
    }
};

exports.logout = async (req, res) => {
    try {
        const {uuid} = req.body;
        const user = await User.findById({'uuid':uuid});

        if (user) {
            user.isLoggedIn = false;
            user.uuid = '';
            user.accesstoken = '';
            await user.save();
            res.status(200).json({ message: 'Logged out' });
        } else {

            res.status(404).json({ message: 'Not Found' });
        }
    } catch (error) {
        console.error('Error logging out:', error);
        res.status(500).json({ message: 'Server Encountered an Internal Error' });
    }
};

exports.getCouponCode = async (req, res) => {
    try {
        const couponCode = "YOUR_COUPON_CODE";
        res.status(200).json({ couponCode });
    } catch (error) {
        console.error('Error generating coupon code:', error);
        res.status(500).json({ message: 'Server Encountered an Internal Error' });
    }
};

exports.bookShow = async (req, res) => {
    try {
        const { userId, showId } = req.body;
        res.status(200).json({ message: 'Show booked successfully' });
    } catch (error) {
        console.error('Error booking show:', error);
        res.status(500).json({ message: 'Server Encountered an Internal Error' });
    }
};
