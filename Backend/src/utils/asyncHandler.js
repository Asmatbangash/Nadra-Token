
// this high order funcation save the app will crash
export const asyncHandler = (reqHandler) =>{
    return (req, res, next) =>{
        Promise.resolve(reqHandler(req, res, next)).catch((error) => next(error))
    }
}