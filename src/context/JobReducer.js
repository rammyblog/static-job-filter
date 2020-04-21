export default (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        jobs: action.data,
        tempJobs: action.data.map((item) => {
          return {
            ...item,
            searchItems: [
              item.role,
              item.level,
              ...(item.languages || ""),
              ...(item.tools || ""),
            ],
          }
        }),
      }
    case "FILTER_BY_TAGS":
      return {
        ...state,
        jobs: action.tags.length
          ? state.tempJobs.filter((job) => jobFiltering(action.tags, job))
          : state.jobs,
      }
    case "ADD_TAG":
      return {
        ...state,
        tags: [...state.tags, action.tag],
      }
    case "REMOVE_TAG":
      return {
        ...state,
        tags: state.tags.filter((tag) => tag !== action.tag),
      }
    default:
      return state
  }
}

function jobFiltering(tags, job) {
  return tags.every((item) => job.searchItems.includes(item))
}
