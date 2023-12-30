const User = require('../model/userSchema.js')

async function returnName(request, response){
    try {
        const userEmail = request.body.email;

        let user = User.findOne({email: userEmail});

        if (user){
            return response.status(200).json({
                data: user
            })
        }
        else {
            return response.status(401).json({
                message: "User not found"
            })
        }
    }
    catch (error){
        console.log(error);
    }
}

async function userLogin(request, response){
    try {
        const user = await User.findOne({
            email: request.body.email
        })

        if (user){
            return response.status(200).json({
                data: user
            })
        }
        else {
            return response.status(401).json({
                message: "User with given email doesn't exists."
            })
        }
    }
    catch (error){
        return response.status(500).json({
            message: error.message
        });
    }
}

async function userSignup(request, response) {
    try{
        const exist = await User.findOne({
            username: request.body.username
        })

        const exist2 = await User.findOne({
            email: request.body.email
        })

        if (exist2){
            return response.status(403).json({
                message: "Account on this email already exists"
            })
        }

        if (exist){
            return response.status(401).json({
                message: "Username already exists"
            })
        }
        

        const user  = request.body;
        const newUser = new User(user);

        await newUser.save();

        response.status(200).json({
            message: user
        })
    }
    catch (error){
        response.status(500).json({message: error.message});
    }
}

module.exports = {
    userSignup,
    userLogin,
    returnName
};