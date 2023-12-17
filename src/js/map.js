class ErrorRepository {
    constructor() {
        this.errors = new Map([
            [400, 'неправильный, некорректный запрос'],
            [401, 'не авторизован'],
            [402, 'необходима оплата'],
            [403, 'запрещено'],
            [404, 'не найдено'],
        ])
    }

    translate(code) {
        if (this.errors.has(code)) {
           return this.errors.get(code)
        } else {
            throw new Error('Unknown error') 
        }    
    }
}

module.exports = ErrorRepository;
