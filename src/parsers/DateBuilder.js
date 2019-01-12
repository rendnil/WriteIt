
export default class DateBuilder{

  static sortLatest(arr){
    return arr.sort((el1, el2) => {
      let date1 = Date.parse(el1.created_at)
      let date2 = Date.parse(el2.created_at)
      return (date2-date1)
    })
  }



}
