

const userRegister = async (err, req, res, next) =>{
   res.status(200).json({
    message: "welcome"
   })
}

export {userRegister}