const ErrorRepository = require('../map.js');

test('Проверка на наличие кода', () => {
    const error = new ErrorRepository();
    const code = error.translate(400)
    expect(code).toBe('неправильный, некорректный запрос');
});

test('Проверка на отсутствие кода', () => {
    const error = new ErrorRepository();
    expect(() => error.translate(500)).toThrow('Unknown error')
});
