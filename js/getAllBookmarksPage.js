const goBackButtonGetAllBookmarksPage = document.querySelector('#GoBackButton');
const ulList = document.querySelector('.BookmarksDiv ul');
// console.log(ulList);

const listOfAllBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
console.log(listOfAllBookmarks);

listOfAllBookmarks.forEach(element => {
    const newLi = document.createElement('li'); 
    const newLink = document.createElement('a');
    newLink.href = element.url;
    newLink.textContent = element.name;

    newLi.appendChild(newLink);
    ulList.appendChild(newLi);

});

goBackButtonGetAllBookmarksPage.addEventListener("click",function(){
    // console.log("Go Back button is pressed.");

    // const listOfAllBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    // console.log(listOfAllBookmarks);

    // const ulList = document.querySelector('.BookmarksDiv ul');
    // console.log(ulList);
    console.log("Go Back Button clicked");
    window.location.replace(
        "../index.html",
    );

});





