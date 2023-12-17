const Team = require('../set.js');
const Character = require('../characters.js');

test('Проверка на создание одного объекта', () => {
    const member = new Character('Ivan');
    const team = new Team();
    team.add(member);
    expect(team.members).toEqual(new Set([{ 'name': 'Ivan' }]));
});

test('Добавляем объект', () => {
    const member = new Character('Ivan');
    const team = new Team();
    team.add(member);
    expect(() => team.add(member)).toThrow(`Объект с именем ${member.name} уже существует`);
});

test('Проверка на создание нескольких объектов', () => {
    const member1 = new Character('Ivan');
    const member2 = new Character('Oleg');
    const member3 = new Character('Stepan');
    const team = new Team();
    team.addAll(member1, member2, member3);
    expect(team.members).toEqual(new Set([
        { 'name': 'Ivan' },
        { 'name': 'Oleg' },
        { 'name': 'Stepan' },
    ]));
});

test('Проверка на преобразование Set в Array', () => {
    const member1 = new Character('Ivan');
    const member2 = new Character('Oleg');
    const member3 = new Character('Stepan');
    const team = new Team();
    team.addAll(member1, member2, member3);
    expect(team.toArray()).toEqual([
        { 'name': 'Ivan' },
        { 'name': 'Oleg' },
        { 'name': 'Stepan' },
    ]);
});
