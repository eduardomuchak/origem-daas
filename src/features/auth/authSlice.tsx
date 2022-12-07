import { createSlice } from '@reduxjs/toolkit';

interface UserInfo {
  id?: string;
  nome?: string;
  email?: string;
  telefone?: string;
  perfil?: string;
  avatar?: string;
  nome_role?: string;
  role_id?: number;
}

interface AuthValue {
  user: UserInfo | null;
  token: string | null;
}

interface AuthState {
  auth: AuthValue;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null } as AuthValue,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export const selectCurrentUser = (state: AuthState) => state.auth.user;
export const selectCurrentToken = (state: AuthState) => state.auth.token;
