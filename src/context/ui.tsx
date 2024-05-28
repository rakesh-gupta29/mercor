import React, {
  useReducer,
  useMemo,
  useContext,
  createContext,
  useCallback,
} from 'react'

type Action =
  | {
      type: 'OPEN_SIDEBAR'
    }
  | {
      type: 'CLOSE_SIDEBAR'
    }
  | {
      type: 'OPEN_MODAL'
    }
  | {
      type: 'CLOSE_MODAL'
    }
  | {
      type: 'SET_MODAL_VIEW'
      view: MODAL_VIEWS
    }
  | {
      type: 'SET_SIDEBAR_VIEW'
      view: SIDEBAR_VIEWS
    }

export type MODAL_VIEWS = 'WARNING_MODAL' | 'SUCCESS_MODAL'

export type SIDEBAR_VIEWS = 'MOBILE_NAV'

export interface State {
  isSidebar: boolean
  isModal: boolean
  sidebarView: string
  modalView: string
}

interface UIActions {
  openSidebar: () => void
  closeSidebar: () => void
  toggleSidebar: () => void
  closeSidebarIfPresent: () => void
  openModal: () => void
  closeModal: () => void
  toggleModal: () => void
  closeModalIfPresent: () => void
  setModalView: (view: MODAL_VIEWS) => void
  setSidebarView: (view: SIDEBAR_VIEWS) => void
}

const initialState = {
  isSidebar: false,
  isModal: true,
  modalView: 'SUCCESS_MODAL',
  sidebarView: '',
}
export const UIContext = createContext<State & Partial<UIActions>>(initialState)

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case 'OPEN_SIDEBAR': {
      return {
        ...state,
        isSidebar: true,
      }
    }
    case 'CLOSE_SIDEBAR': {
      return {
        ...state,
        isSidebar: false,
      }
    }

    case 'OPEN_MODAL': {
      return {
        ...state,
        isModal: true,
        isSidebar: false,
      }
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        isModal: false,
      }
    }
    case 'SET_MODAL_VIEW': {
      return {
        ...state,
        modalView: action.view,
      }
    }
    case 'SET_SIDEBAR_VIEW': {
      return {
        ...state,
        sidebarView: action.view,
      }
    }
    default: {
      return state
    }
  }
}

//  we can restrict the props the provider accepts instead of using `any`
export function UIProvider(props: any) {
  const [state, dispatch] = useReducer(uiReducer, initialState)
  const openSidebar = useCallback(
    () => dispatch({ type: 'OPEN_SIDEBAR' }),
    [dispatch],
  )
  const closeSidebar = useCallback(
    () => dispatch({ type: 'CLOSE_SIDEBAR' }),
    [dispatch],
  )
  const toggleSidebar = useCallback(
    () =>
      state.isSidebar
        ? dispatch({ type: 'CLOSE_SIDEBAR' })
        : dispatch({ type: 'OPEN_SIDEBAR' }),
    [dispatch, state.isSidebar],
  )
  const closeSidebarIfPresent = useCallback(
    () => state.isSidebar && dispatch({ type: 'CLOSE_SIDEBAR' }),
    [dispatch, state.isSidebar],
  )

  const openModal = useCallback(
    () => dispatch({ type: 'OPEN_MODAL' }),
    [dispatch],
  )
  const closeModal = useCallback(
    () => dispatch({ type: 'CLOSE_MODAL' }),
    [dispatch],
  )
  const toggleModal = useCallback(
    () =>
      state.isModal
        ? dispatch({ type: 'CLOSE_MODAL' })
        : dispatch({ type: 'OPEN_MODAL' }),
    [dispatch, state],
  )
  const closeModalIfPresent = useCallback(
    () => state.isModal && dispatch({ type: 'CLOSE_MODAL' }),
    [dispatch, state.isModal],
  )
  const setModalView = useCallback(
    (view: MODAL_VIEWS) => dispatch({ type: 'SET_MODAL_VIEW', view }),
    [dispatch],
  )

  const setSidebarView = useCallback(
    (view: SIDEBAR_VIEWS) => dispatch({ type: 'SET_SIDEBAR_VIEW', view }),
    [dispatch],
  )

  const value = useMemo(
    () => ({
      ...state,
      openSidebar,
      closeSidebar,
      closeModalIfPresent,
      toggleSidebar,
      closeSidebarIfPresent,
      openModal,
      closeModal,
      setModalView,
      setSidebarView,
      toggleModal,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state],
  )

  return <UIContext.Provider value={value} {...props} />
}

export const useUIContext = () => {
  const context = useContext(UIContext)
  if (context === undefined) {
    throw new Error(`useUI  hook can be  used within a UIProvider only.`)
  }
  return context
}
