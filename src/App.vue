<template>
  <div>
    <h1>Hello App!</h1>
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/one">Go to one</router-link>
      <router-link to="/two">Go to two</router-link>
      <router-link to="/three/one">响应路由参数的变化one</router-link>
      <router-link to="/three/two">响应路由参数的变化two</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>