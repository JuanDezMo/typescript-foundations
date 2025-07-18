console.log(`Objetos Literales`);

console.log('Arreglos');
let skills: string[] = ['Counter', 'Bash', 'Healing'];

console.log(`Skills List: ${skills} - Type: ${typeof skills}`);
console.log(skills);


// Definicion de una interfaz
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}


// Ejemplo de un objeto literal
const mario : Character = {
    name: 'Mario',
    hp: 100,
    skills: ['Jump', 'Push', 'Fly']
}
mario.hometown = 'Florencia';

console.log(`Mario Type: ${typeof mario}`);
console.log(mario);


