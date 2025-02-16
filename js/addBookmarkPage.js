// import {listOfAllBookmarks,addBookmarkInList} from './globalData.js';

const goBackButton = document.querySelector("#GoBack");
const addBookmarkButton = document.querySelector("#add");
const addBookmarkInputBoxName = document.querySelector('#AddBookmarkName');
const addBookmarkInputBoxUrl = document.querySelector('#AddBookmarkURL');

goBackButton.addEventListener("click",function(){
    console.log("Go Back Button clicked");
    if(window.location.protocol === "file:" || window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"){
        window.location.replace(window.location.origin +
            "/index.html",
        );
    } else {
        window.location.replace(window.location.origin +"/Bookmarks/index.html");
    }
    
});

addBookmarkButton.addEventListener("click", function(){
    console.log("Add Button clicked");
    let bookmarkName = addBookmarkInputBoxName.value;
    let bookmarkUrl = addBookmarkInputBoxUrl.value;
    // console.log(listOfAllBookmarks);
    // // listOfAllBookmarks.push({
    // //     id: listOfAllBookmarks.length + 1,
    // //     link: bookmarkValue
    // // });

    // addBookmarkInList({
    //     id: listOfAllBookmarks.length + 1,
    //     link: bookmarkValue
    // });

    const listOfAllBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    listOfAllBookmarks.push({
        id: listOfAllBookmarks.length + 1,
        name: bookmarkName,
        url: bookmarkUrl 
    });
    localStorage.setItem('bookmarks', JSON.stringify(listOfAllBookmarks));
    console.log(listOfAllBookmarks);
    addBookmarkInputBoxName.value = '';
    addBookmarkInputBoxUrl.value = '';
});