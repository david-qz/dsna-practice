export function makePet(name, type, age, food, toys) {
    return { name, type, age, food, toys, };
}

export function formatWork(data) {
    return {
        work: data.book.title,
        writer: `${data.author.first} ${data.author.last}`,
    };
}

export function reverseFormatWork(book) {
    let [first, last, ...rest] = book.writer.split(/\s/);
    // Assume the first bit of whitespace delimits the first name and the rest is a surname.
    if (rest.length !== 0) { last += ' ' + rest.join(' '); }
    return {
        author: {
            first,
            last,
        },
        book: {
            title: book.work,
        }
    };
}
