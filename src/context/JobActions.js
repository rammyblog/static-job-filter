import * as types from "./ActionTypes"

export const getNewsSuccess = (data) => {
  return { type: types.GET_DATA, data }
}

export const filterJobsByTags = (tags) => {
  return { type: types.FILTER_BY_TAGS, tags }
}

export const addTagsTOArray = (tag) => {
  return { type: types.ADD_TAG, tag }
}

export const removeTagsFromArray = (tag) => {
  return { type: types.REMOVE_TAG, tag }
}

export const clearTagsFromArray = () => {
  return { type: types.CLEAR_TAGS }
}
