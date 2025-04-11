

const userRegister = async (req, res, next) =>{
   res.status(200).json({
      message: 'welcome to test the api'
   })
}

export {userRegister}