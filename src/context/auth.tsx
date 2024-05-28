import { fakeLogin } from 'api/auth'
import React, {
  useReducer,
  useMemo,
  useContext,
  createContext,
  useCallback,
  useEffect,
} from 'react'
import { User } from 'types/user'

type Action =
  | { type: 'LOGIN_REQUEST' }
  | { type: 'LOGIN_SUCCESS'; user: User }
  | { type: 'LOGIN_FAILURE'; error: string }
  | { type: 'LOGOUT' }

export interface AuthState {
  user: User | null
  loading: boolean
  error: string | null
}

interface AuthActions {
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
}

export const AuthContext = createContext<AuthState & AuthActions>(
  {} as AuthState & AuthActions,
)

function authReducer(state: AuthState, action: Action): AuthState {
  switch (action.type) {
    case 'LOGIN_REQUEST': {
      return {
        ...state,
        loading: true,
        error: null,
      }
    }
    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        loading: false,
        user: action.user,
        error: null,
      }
    }
    case 'LOGIN_FAILURE': {
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    }
    case 'LOGOUT': {
      return {
        ...state,
        user: null,
        error: null,
      }
    }
    default: {
      return state
    }
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState)

  const login = useCallback(async (username: string, password: string) => {
    dispatch({ type: 'LOGIN_REQUEST' })
    try {
      const user = await fakeLogin(username, password)
      dispatch({ type: 'LOGIN_SUCCESS', user })
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: 'LOGIN_FAILURE',
          error: error.message || 'Login failed',
        })
      }
    }
  }, [])

  const logout = useCallback(() => {
    dispatch({ type: 'LOGOUT' })
  }, [])

  const value = useMemo(
    () => ({
      ...state,
      login,
      logout,
    }),
    [state, login, logout],
  )

  // we can add an api call using the saved local state to verify the user once the app loads.

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth hook can be used within an AuthProvider only.`)
  }
  return context
}
