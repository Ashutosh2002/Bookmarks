export const listOfAllBookmarks = [
    {
      id:1,
      link:"https://www.google.com"
    }
];
  
export function addBookmarkInList(newBookmark){
    listOfAllBookmarks.push(newBookmark);
}