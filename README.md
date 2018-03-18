# vue-preload-page

喜欢的希望能到github给小弟点个赞，github: https://github.com/liberties

预加载vue的页面js文件

先在入口处引入插件
```javascript
import vuePreload from 'vue-preload-page';
import Vue from 'vue';
//router为vue-router的实例
vuePreload(router,Vue);
```
然后在组件处配置一下，比如你想在a页面预加载其他页面的js，就配置一下它们的路由到数组中就行。

<br>
<img width="500"  src="https://raw.githubusercontent.com/liberties/vue-proload-page/master/static/1.jpg"/>

可以发现浏览该页面的时候，会自动延迟下载配置的其他页面

<br>
<img width="500"  src="https://raw.githubusercontent.com/liberties/vue-proload-page/master/static/2.jpg"/>

ps：这里和mini-ls搭配更佳，目前实现了一整套方案，可以缓存静态js、缓存api接口到本地，然后加上预加载js，配合上骨架图，感觉优化效果感觉还不错。可惜的是目前公司方案没办法上骨架图了。希望能够后期重构一下。

本来打算预加载api数据的，但是考虑到某些接口需要变量作为参数，有很多不确定性，所以先不贸然处理，大佬有其他更好的方案希望能分享一下给我。
