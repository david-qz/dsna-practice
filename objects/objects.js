export function makePet(name, type, age, food, toys) {
    return { name, type, age, food, toys, };
}

export function formatWork(data) {
    return {
        work: data.book.title,
        writer: `${data.author.first} ${data.author.last}`,
    };
}
