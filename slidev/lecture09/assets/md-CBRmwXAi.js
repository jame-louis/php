import{o as r,b as l,w as n,g as s,v as i,x as d,z as t}from"./modules/vue-CzfQoA5F.js";import{I as p}from"./slidev/default-D23u2fVC.js";import{u as m,f as c}from"./slidev/context-CBe4gu7h.js";import"./index-aw_wPr88.js";import"./modules/shiki-Bn-LvZSj.js";const $={__name:"slides.md__slidev_40",setup(g){const{$clicksContext:o,$frontmatter:a}=m();return o.setup(),(u,e)=>(r(),l(p,i(d(t(c)(t(a),39))),{default:n(()=>[...e[0]||(e[0]=[s("h2",null,"挑战1：关键代码提示",-1),s("div",{class:"grid grid-cols-3 gap-4 text-sm"},[s("div",{class:"p-3 bg-blue-50 rounded-lg"},[s("div",{class:"font-bold text-blue-700 mb-2"},"列出图片"),s("pre",{class:"text-xs"},`$images = glob(
  "uploads/images/*.
  {jpg,png,gif}",
  GLOB_BRACE
);`)]),s("div",{class:"p-3 bg-green-50 rounded-lg"},[s("div",{class:"font-bold text-green-700 mb-2"},"计算总大小"),s("pre",{class:"text-xs"},`$total = 0;
foreach ($images as $img) {
  $total += filesize($img);
}`)]),s("div",{class:"p-3 bg-red-50 rounded-lg"},[s("div",{class:"font-bold text-red-700 mb-2"},"删除文件"),s("pre",{class:"text-xs"},`if (strpos($file, 'uploads/') === 0) {
  unlink($file);
}`)])],-1)])]),_:1},16))}};export{$ as default};
