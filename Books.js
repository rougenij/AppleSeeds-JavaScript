// Instructions
// 1. Create an object that represents a book. It should have
// 4-5 properties that make sense for a book to have.
// 2. Then write a function that has one argument, a book,
// that will return the following description from your book
// object:
// `The book <book name> was written by <author name> in
// the year <publishing yeary

const book = {
    bookName : "My Adventure while learning on how to become a Full-Stack" ,
    authorName : "Rouge" ,
    publisher : "AppleSeeds",
    releaseDate : "May 1st 2022",
    pageLength : 250
    
}

function bookID(book) {
    return `The Book ${book.bookName} was written by ${book.authorName} in the year ${book.releaseDate}`
}
