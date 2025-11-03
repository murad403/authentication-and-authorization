
const notFound = (req, res, next) =>{
    return res.status(404).json({
        success: false,
        message: "Api not found",
        error: ""
    })
}

export default notFound;