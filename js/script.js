const addButton = document.querySelector('#AddButton');
const getButton = document.querySelector('#GetButton');

addButton.addEventListener("click", function(){
    // addButton.innerHTML = "Button Clicked";
    console.log()
    console.log("Clicked");

    if(window.location.protocol === "file:" || window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"){
      window.location.replace(window.location.origin +
        "/../html/addBookmarkPage.html",
      );
    } else {
      window.location.replace(window.location.origin +
        "/Bookmarks/html/addBookmarkPage.html",
      );
    }

    
});

getButton.addEventListener('click',function(){
    console.log("Get Bookmarks button Clicked");

    if(window.location.protocol === "file:" || window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"){
      window.location.replace(window.location.origin +
        "/../html/getAllBookmarksPage.html",
      );
    } else {
      window.location.replace(window.location.origin +
        "/Bookmarks/html/getAllBookmarksPage.html",
      );
    }
    
});

