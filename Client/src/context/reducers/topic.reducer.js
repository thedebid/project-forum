import { TOPIC_FETCH, TOPIC_FETCH_SUCCESS } from "../Types";

function reducer(state, action) {
  switch (action.type) {
    case TOPIC_FETCH:
      return {
        ...state,
        loading: true,
      };
    case TOPIC_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        topics: action.payload.res.data,
      };
    // case CATEGORY_FETCH_FOR_PRODUCT:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case CATEGORY_FETCHED_FOR_PRODUCT:
    //   return {
    //     ...state,
    //     loading: false,
    //     list: action.payload.res.data.details.categories,
    //   };
    // case CATEGORY_ADD:
    //   return {
    //     ...state,
    //     confirmLoading: true,
    //   };
    // case CATEGORY_ADD_SUCCESS:
    //   return {
    //     ...state,
    //     list: [action.payload.data.details, ...state.list],
    //     confirmLoading: false,
    //     pagination: {
    //       ...state.pagination,
    //       total: state.pagination.total + 1,
    //     },
    //   };
    // case CATEGORY_ADD_FAILURE:
    //   return {
    //     ...state,
    //     confirmLoading: false,
    //   };

    // case CATEGORY_STATUS_UPDATED_SUCCESS:
    //   const data = state.list.map((item) => {
    //     if (item.id !== action.payload.id) {
    //       return item;
    //     } else {
    //       return {
    //         ...item,
    //         ...action.payload,
    //       };
    //     }
    //   });
    //   return {
    //     ...state,
    //     list: data,
    //   };
    // case CATEGORY_UPDATED:
    //   const updatedData = state.list.map((item) => {
    //     if (item.id !== action.payload.id) {
    //       return item;
    //     } else {
    //       return {
    //         ...item,
    //         ...action.payload,
    //       };
    //     }
    //   });
    //   return {
    //     ...state,
    //     list: updatedData,
    //   };
    // case SELECTED_KEY_UPDATE:
    //   return {
    //     ...state,
    //     selectedRowKeys: action.payload,
    //   };
    default:
      return {
        ...state,
      };
  }
}

export default reducer;
