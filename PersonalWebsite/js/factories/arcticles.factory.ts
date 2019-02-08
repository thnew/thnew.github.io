'use strict';

interface ArticlesFactory {
    getArticles(): Article[]
}

app.factory('ArticlesFactory', function (): ArticlesFactory {
    let articles = [];

    // ToDo: Read articles from files

    return {
        getArticles: function(): Article[] {
            return articles
        }
    };
});