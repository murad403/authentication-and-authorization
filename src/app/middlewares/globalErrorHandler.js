
const globalErrorHanlder = (err, req, res, next) => {
    console.log("Global error", err);
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal server error";
    let errorSources = [
        {
            path: "",
            message: "Something went wrong"
        }
    ]
    if (err instanceof Error) {
        statusCode = 500;
        message = err.message;
        errorSources = [
            {
                path: "Error",
                message: err.message,
            },
        ];
    }
    return res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        err,
        error: err.stack
    })
}

export default globalErrorHanlder;