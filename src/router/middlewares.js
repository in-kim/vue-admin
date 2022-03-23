import $store from "../store";
import { AuthService } from "@/services/auth.service";
/**
 * Current user state initialization
 * @WARN Must be always first in middleware chain
 */
export async function initCurrentUserStateMiddleware(to, from, next) {
  let isLogin = to.matched.some(function (routeInfo) {
    return routeInfo.meta.authRequired;
  });

  // to: 이동할 url에 해당하는 라우팅 객체
  if (!isLogin) {
    let accessToken = AuthService.getToken();

    // store 토큰 저장
    $store.commit("auth/SET_TOKEN", accessToken);
    // 이동할 페이지에 인증 정보가 필요하면 경고 창을 띄우고 페이지 전환은 하지 않음
    if (accessToken) {
      AuthService.hasToken(accessToken).then((res) => {
        if (!res) {
          alert("세션 만료");
          AuthService.makeLogout();
          next("/login");
        } else {
          next();
        }
      });

      next();
    } else {
      next("/login");
    }
    // next('/login ')
  } else {
    next(); // 페이지 전환
  }
}
