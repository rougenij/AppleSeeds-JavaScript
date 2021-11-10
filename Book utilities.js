// 1. create 2 book objects with properties: name, author, year.
// 2. create an empty object bookUtils (utils = short for utilities).
// 3. add to to the bookUtils object a function getFirstPublished, that recieves 2
// books and returns the book with the smaller year.
// 4. add to to the bookUtils object a function setNewEdition, that recieves a
// book and an edition year and sets a new property latestEdition with the
// edition year, or updates an existing one.
// 5. add to to the bookUtils object a setLanguage function, that recieves a book
// and a language and sets a new property language with the languahe, or
// updates an existing one.
// 6. add to to the bookUtils object a setTranslation function, that recieves a
// book a language and a translator, and sets a new property of translation,
// which is an object that contains the translator and the language.
// 7. add to to the bookUtils object a setPublisher function, that recieves a book
// a name and a location, and sets a new property named publisher, which is an
// object that contains the name and location.
// 8. add to to the bookUtils object a function isSamePublisher, that recieves 2
// books and checks if the publisher name and location are identical in the 2
// books.


const book1 = {
    name: "Rouge's Adventure",
    author: "Rouge",
    publishedyear: "2022",
}

const book2 = {
    name: "Call of Duty Warzone",
    author: "Ubisoft",
    publishedyear: "2019"
}

const bookUtils = {
    getFirstPublished(book1, book2) {
        return book1.publishedyear < book2.publishedyear ? book1 : book2;
    },
    setNewEdition(book, editionYear) {
        book["latestEdition"] = editionYear;
    },
    setLanguage(book, language) {
        book["language"] = language;
    },
    setTranslation(book, language, translator) {
        book["translation"] = {translatorName: translator, newLanguage: language};
    },
    setPublisher(book, name, location) {
        book["publisher"] = {publisherName: name, newLocation: location};
    },
    isSamePublisher(book1, book2) {
        return book1.publisher.publisherName == book2.publisher.publisherName && book1.publisher.newLocation == book2.publisher.newLocation;
    }
}