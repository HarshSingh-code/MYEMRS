

const errorHandler = (err, req, res, next) => {
    if (!err.message) {
        err.message = "Internal Server Error";
    }
    console.log(err);
    res.status(500).json({ message: err.message });
}
export default errorHandler;
