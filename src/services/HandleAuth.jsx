import { refreshToken } from "./RefreshToken";

export const handleAuth = ()=>{
  if (sessionStorage.getItem("token_access") === null || sessionStorage.getItem("token_refresh") === null)
    return false
  return  refreshToken();
}
