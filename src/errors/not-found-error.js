export default class NotFoundError extends Error{
    statusCode = 404;

    constructor () {
        super("Not found")
    }

    serializeErrors() {
        return [{meaage: "Nor found"}]
    }
}