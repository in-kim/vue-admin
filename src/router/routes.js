// single pages
import Homepage from "@/pages/Home.vue";
import LoginPage from "@/pages/Login.vue";

import UserManagement from "@/pages/UserManagement/UserManagement.vue";
import CompanyManagement from "@/pages/CompanyManagement/CompanyManagement.vue";
import ConfirmManagement from "@/pages/ConfirmManagement/ConfirmManagement.vue";
import PointManagement from "@/pages/PointManagement/PointManagement.vue";
import SalaryManagement from "@/pages/SalaryManagement/SalaryManagement.vue";
import CodeManagement from "@/pages/CodeManagement/CodeManagement";

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
    path: "/home",
    name: "home",
    title: "홈페이지",
    component: Homepage,
    meta: { title: `${DOMAIN_TITLE} | homePage` },
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
    path: "/confirmManagement",
    name: "confirmManagement",
    title: "정보검토요청",
    icon: "el-icon-receiving",
    component: ConfirmManagement,
    meta: { title: `${DOMAIN_TITLE} | 정보검토요청` },
  },
  {
    path: "/pointManagement",
    name: "pointManagement",
    title: "포인트관리",
    icon: "el-icon-coin",
    component: PointManagement,
    meta: { title: `${DOMAIN_TITLE} | 포인트관리` },
  },
  {
    path: "/salaryManagement",
    name: "salaryManagement",
    title: "연봉정보 관리",
    icon: "el-icon-coin",
    component: SalaryManagement,
    meta: { title: `${DOMAIN_TITLE} | 연봉정보 관리` },
  },
  {
    path: "/codeManagement",
    name: "codeManagement",
    title: "공통코드 관리",
    icon: "el-icon-cpu",
    component: CodeManagement,
    meta: { title: `${DOMAIN_TITLE} | 공통코드 관리` },
  },
  {
    path: "*",
    redirect: {
      name: "login",
    },
  },
];
