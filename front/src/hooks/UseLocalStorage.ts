
export const UseGetLocalStorage = (key: string) => {
  const item = localStorage.getItem(key)
  if (item) {
    return JSON.parse(item)
  } else {
    return null
  }
}
export const UseSetLocalStorage = (key: string,item:any) => {
  localStorage.setItem(key, JSON.stringify(item));
}
