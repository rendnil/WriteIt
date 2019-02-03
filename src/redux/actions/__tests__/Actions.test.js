import React from "react"
import {selectPost} from "../selectPostAction"

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
