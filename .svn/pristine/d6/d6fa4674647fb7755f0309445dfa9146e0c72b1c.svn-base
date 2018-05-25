/**
 * [将数组转为tree结构]
 * @param  {[type]} data [description]
 * @param  {[type]} pid  [description]
 * @return {[type]}      [description]
 */
export const toTreeData=(data,pid,idField,pIdField,nameField)=>{
  let result=[],temp
  if(data.length===0)
    return result
  data.forEach((item,i)=>{
    if(item[pIdField]==pid){
      let treeNode={"id":item[idField],"label":item[nameField],"data":item,"children":[]}
      temp=toTreeData(data,item[idField],idField,pIdField,nameField)
      if(temp.length>0){
        treeNode.children=temp
      }
      result.push(treeNode)
    }
  })
  return result
}

export default{
  toTreeData
}
