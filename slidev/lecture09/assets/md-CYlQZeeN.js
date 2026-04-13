import{o,b as l,w as d,g as s,v as i,x as n,z as t}from"./modules/vue-CzfQoA5F.js";import{I as c}from"./slidev/default-D23u2fVC.js";import{u as p,f as m}from"./slidev/context-CBe4gu7h.js";import"./index-aw_wPr88.js";import"./modules/shiki-Bn-LvZSj.js";const _={__name:"slides.md__slidev_21",setup(x){const{$clicksContext:r,$frontmatter:a}=p();return r.setup(),(f,e)=>(o(),l(c,i(n(t(m)(t(a),20))),{default:d(()=>[...e[0]||(e[0]=[s("h2",null,"遍历目录的三种方法",-1),s("div",{class:"grid grid-cols-3 gap-4 text-sm"},[s("div",{class:"p-3 bg-blue-50 rounded-lg"},[s("div",{class:"font-bold text-blue-700 mb-2"},"opendir"),s("code",{class:"text-xs"},"传统方法"),s("pre",{class:"text-xs mt-2"},`$dir = opendir("path");
while ($file = readdir($dir)) {
    // 处理
}
closedir($dir);`)]),s("div",{class:"p-3 bg-green-50 rounded-lg"},[s("div",{class:"font-bold text-green-700 mb-2"},"scandir"),s("code",{class:"text-xs"},"简便方法"),s("pre",{class:"text-xs mt-2"},`$files = scandir("path");
foreach ($files as $file) {
    // 处理
}`)]),s("div",{class:"p-3 bg-purple-50 rounded-lg"},[s("div",{class:"font-bold text-purple-700 mb-2"},"glob"),s("code",{class:"text-xs"},"带通配符"),s("pre",{class:"text-xs mt-2"},`$images = glob("*.jpg");
foreach ($images as $img) {
    // 处理
}`)])],-1)])]),_:1},16))}};export{_ as default};
