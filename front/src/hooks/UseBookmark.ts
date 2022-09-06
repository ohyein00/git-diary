import {UseGetLocalStorage} from "./UseLocalStorage";
import {BookmarkStorageTypes} from "../components/organism/SearchRepoContainer";

export const UseGetBookmark = (key: string): string[] => {
  return UseGetLocalStorage(key)
}
export const UseAddBookmark = (key: string, item: string) => {
  const prevState: BookmarkStorageTypes = UseGetLocalStorage(key)
  if (prevState) {
    prevState.push(item)
    return prevState
  } else {
    return [item]
  }
}

export const UseDeleteBookmark = (key: string, item: string) => {
  const prevState: BookmarkStorageTypes = UseGetLocalStorage(key)
  const currentBookmark = prevState.filter((prevItem) => {
    console.log(prevItem,item)
    return prevItem !== item
  })
  console.log(item)
  return currentBookmark
}
export const UseCheckBookmark = (curItem: string, prevItem: string[]): boolean => {
  return prevItem.includes(curItem)
}
