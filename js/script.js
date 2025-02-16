const addButton = document.querySelector('#AddButton');
const getButton = document.querySelector('#GetButton');

addButton.addEventListener("click", function(){
    // addButton.innerHTML = "Button Clicked";
    console.log("Clicked");

    window.location.replace(
        "../html/addBookmarkPage.html",
      );
});

getButton.addEventListener('click',function(){
    console.log("Get Bookmarks button Clicked");

    window.location.replace(
        "../html/getAllBookmarksPage.html",
      );
});

