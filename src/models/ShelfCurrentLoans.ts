import BookModel from "./BookModel";

class ShelfCurrentLoans{
    book: BookModel;
    daysLeft: number;

    constructor(book: BookModel, daysleft: number) {
        this.book = book;
        this.daysLeft = daysleft;
    }
}

export default ShelfCurrentLoans;