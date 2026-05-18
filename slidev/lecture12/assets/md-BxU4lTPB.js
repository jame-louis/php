import{B as e,C as t,D as n,Q as r,S as i,_t as a,v as o,y as s,yt as c}from"./modules/shiki-DDmem7rx.js";import{n as l,t as u}from"./slidev/context-nsHCsflH.js";import{t as d}from"./slidev/default-BJ3qH66i.js";import{t as f}from"./slidev/CodeBlockWrapper-Bx2rPAfQ.js";var p={__name:`slides.md__slidev_62`,setup(p){let{$slidev:m,$nav:h,$clicksContext:g,$clicks:_,$page:v,$renderContext:y,$frontmatter:b}=l();return g.setup(),(l,p)=>{let m=f;return e(),s(d,c(n(a(u)(a(b),61))),{default:r(()=>[p[2]||=o(`h3`,null,`5.1 代码组织：从"一锅粥"到"模块化"`,-1),p[3]||=o(`p`,null,[o(`strong`,null,`初学者常见结构（一锅粥）`),i(`：`)],-1),t(m,{title:``,ranges:[]},{default:r(()=>[...p[0]||=[o(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light slidev-code`,style:{"--shiki-dark":`#dbd7caee`,"--shiki-light":`#393a34`,"--shiki-dark-bg":`#121212`,"--shiki-light-bg":`#ffffff`}},[o(`code`,{class:`language-text`},[o(`span`,{class:`line`},[o(`span`,null,`project/`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`├── index.php      (HTML + SQL + 逻辑 混在一起)`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`├── add.php`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`└── delete.php`)])])],-1)]]),_:1}),p[4]||=o(`p`,null,[o(`strong`,null,`Phase 6 专业结构`),i(`：`)],-1),t(m,{title:``,ranges:[]},{default:r(()=>[...p[1]||=[o(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light slidev-code`,style:{"--shiki-dark":`#dbd7caee`,"--shiki-light":`#393a34`,"--shiki-dark-bg":`#121212`,"--shiki-light-bg":`#ffffff`}},[o(`code`,{class:`language-text`},[o(`span`,{class:`line`},[o(`span`,null,`project/`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`├── config.php          ← 数据库配置（常量定义）`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`├── functions.php       ← 全局助手函数`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`├── init.php            ← 启动引导（引入 config、functions，开启 session，错误处理）`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`├── partials/`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`│   ├── header.php      ← 共享头部`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`│   └── footer.php      ← 共享尾部`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`├── index.php`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`├── create.php`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`└── delete.php`)])])],-1)]]),_:1})]),_:1},16)}}};export{p as default};