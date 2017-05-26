class CommentList{
  constructor(){
    this.comments = []
  }

  render(){
    return "<ul>" + comments.forEach((comment) => comment.render()) + "</ul>"
  }

  addComment(string){
    this.comments.push(Comment.new(string))
  }
}
