export default function fakename() {
    const first = ['Ana', 'Bia', 'João', 'Julio'];
    const last = ['Alface', 'Melão', 'Goiaba', 'Cenoura'];
    let firstName = first[Math.floor(Math.random() * first.length)];
    let lastName = last[Math.floor(Math.random() * last.length)];
    return `${firstName} ${lastName}`;
}
