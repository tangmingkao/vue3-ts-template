import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title?: string; // 路由title
    icon?: string; // 路由icon
    hidden?: boolean; // 是否显示
    noCache?: boolean;
  }
}