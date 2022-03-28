// single pages
import LoginPage from "@/pages/Login.vue";

import UserManagement from "@/pages/UserManagement/UserManagement.vue";
import CompanyManagement from "@/pages/CompanyManagement/CompanyManagement.vue";

// import { routePropResolver } from './util'
import { DOMAIN_TITLE } from "@/.env";

export const routes = [
  {
    path: "/login",
    name: "login",
    title: "로그인",
    component: LoginPage,
    meta: { title: `${DOMAIN_TITLE} | login`, authRequired: true },
  },
  {
    path: "/userManagement",
    name: "userManagement",
    title: "회원관리",
    icon: "el-icon-user",
    component: UserManagement,
    meta: { title: `${DOMAIN_TITLE} | 회원관리` },
  },
  {
    path: "/companyManagement",
    name: "companyManagement",
    title: "기업정보관리",
    icon: "el-icon-suitcase-1",
    component: CompanyManagement,
    meta: { title: `${DOMAIN_TITLE} | 기업정보관리` },
  },
  {
    path: "*",
    redirect: {
      name: "login",
    },
  },
];
