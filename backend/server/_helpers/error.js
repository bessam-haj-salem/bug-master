module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    if (typeof (err) === 'string') {
        // custom application error
        return res.status(540).json({ message: err });
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.status(541).json({ message: 'Invalid Tokenx' });
    }

    // default to 500 server error
    return res.status(500).json({ message: err.message });
}