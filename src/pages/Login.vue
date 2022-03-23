<template>
  <div class="login__wrapper">
    <div class="login-form__wrapper">
      <h1 class="login__title">로그인</h1>

      <div class="login__form">
        <label :class="emailError ? 'error' : ''">email</label>
        <el-input
          v-model="email"
          placeholder="email를 입력하세요."
          :class="emailError ? 'error' : ''"
          clearable
        />
        <label :class="pwdError ? 'error' : ''">password</label>
        <el-input
          v-model="password"
          placeholder="password를 입력하세요."
          :class="pwdError ? 'error' : ''"
          show-password
        />
      </div>

      <el-button type="danger" :plain="true" @click="onSubmit">Login</el-button>
    </div>
  </div>
</template>
<script>
import { AuthService } from "@/services/auth.service";

export default {
  data() {
    return {
      email: "iam@iam.com",
      emailError: false,
      password: "1q2w3e4r!",
      pwdError: false,
    };
  },
  methods: {
    async onSubmit() {
      // 유효성 검증
      if (this.validation(this)) {
        try {
          const data = await AuthService.makeLogin(this.email, this.password);
          if (data.status === 200) {
            alert("로그인 성공!");
            this.$router.push({
              name: "userManagement",
            });
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        return;
      }
    },
    validation(t) {
      // 이메일 정규식
      const regex =
        /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])+@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])+\.[A-Za-z]{2,3}$/;

      if (this.email.length <= 1) {
        this.emailError = true;

        t.$message({
          type: "error",
          message: "이메일을 입력 해주세요.",
        });

        return false;
      } else if (!regex.test(this.email)) {
        this.emailError = true;
        this.pwdError = true;

        t.$message({
          type: "error",
          message: "이메일 형식을 확인 해주세요.",
        });

        return false;
      } else if (this.password.length <= 1) {
        this.emailError = false;
        this.pwdError = true;

        t.$message({
          type: "error",
          message: "패스워드를 입력 해주세요.",
        });

        return false;
      } else {
        this.emailError = false;
        this.pwdError = false;

        return true;
      }
    },
  },
};
</script>
