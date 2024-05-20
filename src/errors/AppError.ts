export class AppError extends Error {
    statusCode: number
    
    constructor(statusCode: number, message: string){
        super(message)
        this.statusCode = statusCode
    }
    
}

export class NotFoundError extends AppError {
    constructor(
        public message: string,
        public status: number = 404
    ) {
        super(status, message)
    }
}