<template>
  <div class="login">
    <el-form class="form" :model="state.model" :rules="state.rules" ref="loginForm">
      <h1 class="title">爬宠管理后台</h1>
      <el-form-item prop="userName">
        <el-input
          class="text"
          v-model="state.model.username"
          prefix-icon="el-icon-user-solid"
          clearable
          placeholder="用户名"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          class="text"
          v-model="state.model.password"
          prefix-icon="el-icon-lock"
          show-password
          clearable
          placeholder="密码"
        />
      </el-form-item>
      <el-form-item prop="code">
        <div class="control">
          <el-input
            class="text"
            v-model="state.model.code"
            placeholder="验证码"
          />
          <img
            :src="state.codeImg"
            class="codeImg"
            @click="onRefreshCode()"
          />
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          class="btn"
          @click="submit"
        >
          {{ state.btnText }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { encrypt } from '@/assets/rsaEncrypt'
import { reactive, ref, computed, onMounted } from 'vue'
import { Login, GetAuthCode } from '@/api/login'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
const store = useStore()
const router = useRouter()
const route = useRoute()
const state = reactive({
  model: {
    username: 'admin',
    password: '123456a!',
    code: '',
    uuid: ''
  },
  codeImg: '',
  rules: {
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
    ],
    code: [
      { required: true, message: '请输入验证码', trigger: 'blur' },
    ]
  },
  loading: false,
  btnText: computed(() => (state.loading ? '登录中...' : '登录')),
})
const loginForm = ref(null)
onMounted(() => {
  onLoadCode()
})

const submit = () => {
  if (state.loading) {
    return
  }
  loginForm.value.validate(async valid => {
    if (valid) {
      state.loading = true
      let params = {
        ...state.model
      }
      params.password = encrypt(params.password)
      let res = await Login(params)
      ElMessage.success({
        message: '登录成功',
        duration: 1000,
      })
      store.dispatch('app/setToken', res.token)
      const targetPath = decodeURIComponent(route.query.redirect)
      if (targetPath.startsWith('http')) {
        // 如果是一个url地址
        window.location.href = targetPath
      } else if (targetPath.startsWith('/')) {
        // 如果是内部路由地址
        router.push(targetPath)
      } else {
        router.push('/')
      }
      state.loading = false
    }
  })
}

const onRefreshCode = () => {
  onLoadCode()
}

const onLoadCode = () => {
  GetAuthCode({}).then(res => {
    console.log('res', res)
    state.codeImg = `data:image/png;base64,${res.img}`;
    console.log('state.codeImg', state.codeImg)
    state.model.uuid = res.uuid;
  })
}
</script>
<style lang="scss" scoped>
.login {
  transition: transform 1s;
  transform: scale(1);
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #2d3a4b;
  .form {
    width: 520px;
    max-width: 100%;
    padding: 0 24px;
    box-sizing: border-box;
    margin: 160px auto 0;
    .title {
      color: #fff;
      text-align: center;
      font-size: 24px;
      margin: 0 0 24px;
    }
    .text {
      font-size: 16px;
      :deep(.el-input__inner) {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        color: #fff;
        height: 48px;
        line-height: 48px;
        &::placeholder {
          color: rgba(255, 255, 255, 0.2);
        }
      }
    }
    .btn {
      width: 100%;
    }
  }
}
.control {
  position: relative;
  height: 48px;
}
.codeImg {
  position: absolute;
  right: 0;
  top: 0;
  height: 48px;
  width: auto;
  z-index: 99;
  cursor: pointer;
}
</style>
