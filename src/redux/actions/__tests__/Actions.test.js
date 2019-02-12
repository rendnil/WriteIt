import React from "react"
import {selectPost} from "../selectPostAction"
import configureStore from "redux-mock-store"
import thunk from 'redux-thunk'
import {fetchPosts} from "../fetchPostsAction"
import fetchMock from "fetch-mock"

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('selectPost',() => {
  it(`has the correct type`,() => {
    const action = selectPost(7)
    expect(action.type).toEqual("SELECT_POST")
  })

  it('has the correct payload', () => {
    const action = selectPost(7)
    expect(action.payload).toEqual(7)
  })
})

describe('async actions',() => {

  afterEach(() => {
    fetchMock.restore()
  })

  describe('fetchPosts Action',() => {
     it('should post and return data',() => {

       fetchMock.getOnce(`${API_BASE_URL}/comments`, {
     body: { todos: ['do something'] },
     headers: { 'content-type': 'application/json' }
   })

         const store = mockStore({})


      return store.dispatch(fetchPosts())
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({type:"hey", payload:"hey"})
          })

         })
      })
})
