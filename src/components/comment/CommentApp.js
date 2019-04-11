/*
 * @Author: Jarvis Ye 
 * @Date: 2019-03-20 22:44:51 
 * @Last Modified by: Jarvis Ye
 * @Last Modified time: 2019-03-20 23:27:20
 */
import React, { Component } from 'react';
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      comments: JSON.parse(localStorage.getItem('comments')) || []
    }
  }

  handleSubmitComment(comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    this.state.comments.push(comment)
    console.log(this.state.comments)
    localStorage.setItem('comments', JSON.stringify(this.state.comments))
    this.setState({
      comments: this.state.comments
    });
  }

  // 删除评论
  handleDeleteComment(index) {
    let comments = this.state.comments
    comments.splice(index, 1)
    this.setState({
      comments: comments
    });
    localStorage.setItem('comments', JSON.stringify(comments))
  }

  render() {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)} />
      </div>
    )
  }
}

export default CommentApp;