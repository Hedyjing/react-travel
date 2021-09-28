# 仿携程旅游电商项目
## 项目初始化
- 安装项目依赖
- tsconfig.json
- css modules
- .vscode
- 全局typescript的定义声明custom.d.ts
## Header和Footer
- 添加了header和footer, header中top-header有语言切换, 注册登录,
- header中可以搜索
- header第三部分为menu
- 最后是footer

## 组件化重构项目
- 组件化Header和Footer

## 主页内容
> 使用ant design的grid栅格布局对content部分布局, 然后完成菜单和走马灯组件
- 侧边菜单 SideMenu
- 走马灯 Carousel
## 主页热门产品推荐
- mockup假数据
- productCollection组件(三个内容板块是三个ProductCollection组件)
-productCollection内部的ProductImage小组件
## 主页合作企业组件
- BusinessPartners
## 路由与SPA
### 路由
react没有路由系统, 需要引入专门的路由框架react-router

## 配置react-router
react-router和react-router-dom
- 安装react-router-dom会自动安装react-router核心框架
- `<Link />` 组件可以渲染出`<a/>`标签
- `<BrowserRouter />` 组件利用H5 API实现路由器切换
- `<HashRouter />` 组件利用原生js中的window.location.hash实现路由切换
1. 把主页移植到page中, 定义为class组件
2. 安装react-router-dom,同时安装框架ts定义支持
3. 如何知道某个第三方原生支不支持ts呢, 使用了就知道了
4. 用BrowserRouter组件配置主页路由

## 多页面路由跳转
- exact精确匹配
- Switch解决页面叠加渲染的问题, 一次只渲染一个页面
- Switch中的Route是从上到下匹配, 所以404页面放在最后一个
1. `<BrowserRouter>` 组件实现路由导航
2. `<Route/>` 组件实现url匹配
3. `<Switch/>` 组件以页面为单位, 不要页面堆叠

## 注册, 产品搜索, 产品详情页面初始化
- Route 组件绑定组件时, 会自动传给组件的props传入match, history, location属性
- match中有个param属性表示参数, 如何在url中添加参数
  1. 使用?key1=value1&key2=value2
  2. 分段路由Segments
    - RESTful的思维方式, 参数作为url片段的一部分, 使用斜杠'/
    - 例如http://www.hahah.com/product/12354662
      - 最后的数字部分为参数, 具有语义性, 表示来到id为12354662的产品详情页面

## 网站导航, 组件间的路由信息传递
> 使用react-router中的hooks函数进行路由导航
- useParams
- useHistory
- useLocation
- useRouteMatch

## 使用另一种方式导航 - `<Link>`组件
- 使用link组件, 组件会被a标签包括, 这样用户可以右键打开链接
- link内部接受一个to属性props参数, 展开props, 得到children和to, 用a标签包括children, 使用useHistory导航

## Redux
> redux是一种设计模式, 可以进行数据管理
> redux统一保存数据, 在隔离了数据与UI的同事, 负责处理数据的绑定
### 什么时候需要使用Redux
- 组件需要共享数据(或者叫做状态state)的时候
- 某个状态需要在任何地方都可以被随时访问的时候
- 某个组件需要改变另一个组件的状态的时候
- 语言切换, 黑暗模式切换, 用户登录全局数据共享...

### Redux工作流
> React是单向数据流, 只读不写, 数据的修改通过发指令的方式, 让store通过reducer修改
- Reducer是处理数据的方法, 是函数, 不是一个对象
- Reducer可以帮助store初始化数据, 修改数据, 删除数据
- Actions是数据更新的指令
- Store是数据仓库

---
## 利用store进行语言切换
- 创建store, 创建reducer传入store进行初始化

## 在组件中使用store访问数据渲染到页面上
- 使用store.getState();

## 使用action来dispatch命令和变化
- dispatch参数为`{type: 'todos/todoAdded', payload: todoText}`

## 组件订阅store.subscribe
- 在组件内订阅store的数据, 以便store数据更新后可以及时推送到组件
- 当store变化时, 会调用subscribe参数中的回调函数来更新组件的state
- subscribe的参数是一个回调函数, 用来更新组件的state