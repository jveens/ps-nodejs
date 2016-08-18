var express = require('express');
// Create a router to handle our routes instead of doing it manually
var bookRouter = express.Router();


var router = function(nav) {

    var books = [
        {
            title: 'War & Peace',
            author: 'Mr. Bean'
        },
        {
            title: 'Something or Another',
            author: 'Someguy Onetime'
        },
        {
            title: 'Dark Ages',
            author: 'Sir Mr.Knight'
        }
        
    ];

    // so really this is /books/
    bookRouter.route('/')
        .get(function(req, res){
            res.render('bookListView', {
            title: 'Books',
            nav: nav,
            books: books
        });
    });

    // this is /books/single
    bookRouter.route('/:id')
        .get(function(req, res){
            var id = req.params.id;
            res.render('bookView', {
            title: 'Book: ' + books[id].title,
            nav: nav,
            book: books[id]
        });
    });

    return bookRouter;
}

// export the function that will create the router
module.exports = router;