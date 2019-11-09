import Mock from 'mockjs'

/**
 * 
 * 动态模拟菜单
 * 
 * label菜单的名字
 * path菜单的路径
 * icon菜单的图标（系统采用的阿里巴巴图表库）
 * compnent组件的地址
 * children子类菜单数组
 * group配置其他路由激活菜单高亮
 */

var top = [
  {
  label: "首页",
  href: "/wel/index",
  icon: 'el-icon-menu',
  parentId: 0
},
{
  label: "设置",
  icon: 'el-icon-setting',
  href: '/dev/index',
  parentId: 1
},
{
  label: "官网",
  icon: 'el-icon-document',
  href: "https://avuejs.com",
  parentId: 3
}]


const first = [
  {
    id: 33,
    label: "引导页",
    path: '/guide',
    component: 'views/guide/index',
    icon: 'icon-canshu',
    children: [],
  }, 
{
  id: 13,
  label: "权限测试页",
  path: '/role',
  icon: 'icon-quanxian',
  component: 'views/role',
  children: [],
}, 
{
  id: 98,
  label: "档案",
  path: '/record',
  icon: 'icon-quanxian',
  component: 'views/record/index',
  children:[
    {
      id: 3,
      label: "供货商档案",
      path: 'supplier',
      component: 'views/record/supplier',
      icon: 'el-icon-document',
      children: [],
     },
     {
      id: 3,
      label: "商品档案",
      path: 'goods',
      component: 'views/record/goods',
      icon: 'el-icon-document',
      children: [],
     },
     {
      id: 3,
      label: "导入导出",
      path: 'exec',
      component: 'views/record/exec',
      icon: 'el-icon-document',
      children: [],
     },
  ]
},
{
  id: 99,
  label: "采购",
  path: '/purchase',
  icon: 'icon-quanxian',
  children: [
          {
          id: 3,
          label: "入库验收单",
          path: 'putIn',
          component: 'views/purchase/putIn',
          icon: 'el-icon-document',
          children: [],
         },
         {
          id: 3,
          label: "采购退货单",
          path: 'putOut',
          component: 'views/purchase/putOut',
          icon: 'el-icon-document',
          children: [],
         },
         {
          id: 3,
          label: "货商结算单",
          path: 'payment',
          component: 'views/purchase/payment',
          icon: 'el-icon-document',
          children: [],
         },
  ],
}, 
// {
//   id: 3,
//   label: "阿里图标",
//   path: '/iconfont',
//   icon: 'icon-changyonglogo27',
//   component: 'views/iconfont',
//   meta: {},
//   children: []
// },
// {

// {
//   id: 2,
//   label: "第三方网站",
//   path: '/url',
//   icon: 'icon-iframe',
//   meta: {},
//   children: [
//     {
//     id: 3,
//     label: "avue官网",
//     path: 'https://avuejs.com',
//     icon: 'el-icon-document',
//     children: [],
//    },
//    {
//     id: 3,
//     label: "百度",
//     path: 'https://www.baidu.com',
//     icon: 'icon-baidu1',
//     children: [],
//   }, {
//     id: 4,
//     label: "搜狐",
//     path: 'http://www.shouhu.com',
//     icon: 'icon-souhu',
//     children: [],
//   }, {
//     id: 5,
//     label: "360",
//     path: 'http://www.360.com',
//     icon: 'icon-msnui-360',
//     children: [],

//   }]
// }

]


const second = [{
  id: 15,
  label: "高级路由",
  path: '/advanced-router',
  icon: 'icon-iconset0265',
  meta: {},
  children: [{
    id: 16,
    label: "动态路由",
    path: 'mutative-router',
    component: 'views/advanced-router/mutative-router',
    icon: 'icon-dongtai',
    //配置某些路由激活菜单高亮
    group: [
      '/advanced-router/mutative-detail'
    ],
    children: []
  }, {
    id: 17,
    label: "参数路由",
    path: 'argument-page',
    component: 'views/advanced-router/argument-page',
    icon: 'icon-canshu',
    group: ['/advanced-router/argument-detail'],
    children: []
  },]
}, {
  id: 8,
  label: "综合错误",
  path: '/logs',
  icon: 'icon-cuowu',
  meta: {},
  children: [{
    id: 15,
    label: "错误页面",
    path: 'page',
    component: 'page/logs/page',
    icon: 'icon-cuowutishitubiao',
    children: []
  }, {
    id: 15,
    label: "错误日志",
    path: 'error',
    component: 'page/logs/error',
    icon: 'icon-cuowutishitubiao',
    children: []
  }]
}, {
  id: 23,
  label: "环境变量",
  icon: 'icon-dongtai',
  path: '/dev',
  component: 'views/dev/index',
  meta: {

  },
  children: []
}, {
  id: 25,
  label: "json树形",
  icon: 'icon-dongtai',
  path: '/json-tree',
  component: 'views/json-tree/index',
  meta: {},
  children: []
}, {
  id: 24,
  label: "数据持久化",
  path: `/store`,
  component: 'views/store/index',
  icon: 'icon-huanyingye',
  meta: {},
  children: []
}, {
  id: 25,
  label: "剪切板",
  path: `/clipboard`,
  component: 'views/clipboard/index',
  icon: 'icon-canshu',
  meta: {},
  children: []
}, {
  id: 25,
  label: "标签页操作",
  path: `/tags`,
  component: 'views/tags/index',
  icon: 'icon-canshu',
  meta: {},
  children: []
}, {
  id: 26,
  label: "灰度模式",
  path: `/gray`,
  component: 'views/gray/index',
  icon: 'icon-shujuzhanshi2',
  meta: {},
  children: []
}, {
  id: 9,
  label: "系统管理",
  path: '/admin',
  icon: 'icon-liuliangyunpingtaitubiao08',
  children: [{
    id: 20,
    label: "用户管理",
    path: 'user',
    component: 'views/admin/user/index',
    icon: 'icon-yonghuguanli',
    children: []
  }, {
    id: 21,
    label: "角色管理",
    path: 'role',
    component: 'views/admin/role/index',
    icon: 'icon-jiaoseguanli',
    children: []
  }
  ]
}]
export default ({ mock }) => {
  if (!mock) return;
  let menu = [first, second];
  Mock.mock('/user/getMenu', 'get', (res) => {
    let body = JSON.parse(res.body);
    return {
      data: menu[body.type] || []
    }
  })
  Mock.mock('/user/getTopMenu', 'get', () => {
    return {
      data: top
    }
  })
}

