<template>
  <div :class="classes">
    <div class="navigates">
      <ul>
        <li>
          <h2>动态路由匹配</h2>
          <router-link to="/MatchBase/45">基本</router-link>
          <router-link to="/MatchBase/long/post/666">基本2</router-link>
          <router-link to="/MatchOne">响应路由参数的变化</router-link>
          <router-link to="/MatchOne-1">响应路由参数的变化-1</router-link>
          <router-link to="/MatchTwo-user">捕获所有路由或404NotFound路由(/MatchTwo-*)</router-link>
          <router-link to="/MatchTwo">捕获所有路由或404NotFound路由(/*)</router-link>
        </li>
        <li>
          <h2>嵌套路由</h2>
          <router-link to="/NestBase/666/children">基本</router-link>
        </li>
        <li>
          <h2>编程式路由</h2>
          <router-link to="/ProgrammeBase/000">基本</router-link>
          <a @click="pathProgrammeBaseView">使用path参数的,push()</a>
          <a @click="pushProgrammeBaseView">使用name参数的,push()</a>
          <a @click="replaceProgrammeBaseView">使用name参数的replace()</a>
          <a @click="goForward">router.go(+n)</a>
          <a @click="goBackward">router.go(-n)</a>
        </li>
        <li>
          <h2>命名路由</h2>
          <router-link to="/NameBase/000">基本</router-link>
          <router-link :to="{name:'NameBase',params:{id:666}}">使用命名路由</router-link>
        </li>
        <li>
          <h2>命名视图</h2>
          <router-link to="/ViewBase">基本</router-link>
          <router-link to="/ViewBase/children">嵌套命名视图</router-link>
        </li>
        <li>
          <h2>重定向和别名</h2>
          <router-link to="/RedirectBase">重定向</router-link>
          <router-link to="/bbbb">别名</router-link>
        </li>
        <li>
          <h2>路由组件传参</h2>
          <router-link to="/TransferBase/666">基本</router-link>
        </li>
        <li>
          <h2>导航守卫</h2>
          <router-link to="/GuaidBase">基本</router-link>
        </li>
      </ul>
    </div>
    <div class="show">
      <div class="show-content-wrap">
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
        <hr />
        <!-- 命名视图 -->
        <router-view name="ViewOne"></router-view>
        <router-view name="ViewTwo"></router-view>
      </div>
    </div>
  </div>
</template>
<script>
const prefixCls = "home";
export default {
  methods: {
    pathProgrammeBaseView() {
      this.$router.push({ path: "/ProgrammeBase/1111" });
    },
    pushProgrammeBaseView() {
      this.$router.push({ name: `ProgrammeBase`, params: { id: 222 } });
    },
    replaceProgrammeBaseView() {
      this.$router.replace({ name: `ProgrammeBase`, params: { id: 333 } });
    },
    goForward() {
      console.log("前进~");
      this.$router.go(1);
    },
    goBackward() {
      console.log("后退~");
      this.$router.go(-1);
    }
  },
  computed: {
    classes() {
      return [`${prefixCls}`];
    }
  }
};
</script>
<style></style>
