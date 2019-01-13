
export default class DateBuilder{

  static sortLatest(arr){
    return arr.sort((post1, post2) => {
      let date1 = Date.parse(post1.created_at)
      let date2 = Date.parse(post2.created_at)
      return (date2-date1)
    })
  }

  static sortRecentlyUpdated(arr){
    return arr.sort((post1, post2) => {
      let date1 = Date.parse(post1.updated_at)
      let date2 = Date.parse(post2.updated_at)
      return (date2-date1)
    })
  }

  static sortNetVotes(arr){
    return arr.sort((post1, post2) => {
      let post1NetVotes = post1.upvotes - post1.downvotes
      let post2NetVotes = post2.upvotes - post2.downvotes
      return (post2NetVotes - post1NetVotes)
    })
  }



}
