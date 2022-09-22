export const UsePageDivide = <ItemsT>(items:ItemsT[],size:number):ItemsT[][] =>{
  const curItems:ItemsT[][] = []
  items.forEach((item,index)=>{
    const page = Math.floor(index/size)
    if(curItems[page]){
      curItems[page].push(item)
    }else{
      curItems[page] = [item]
    }
  })
  return curItems
}
