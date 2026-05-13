import{B as e,C as t,D as n,Q as r,S as i,_t as a,v as o,y as s,yt as c}from"./modules/shiki-DDmem7rx.js";import{n as l,t as u}from"./slidev/context-CasOHWMF.js";import{t as d}from"./slidev/default-DB97NYgi.js";import{t as f}from"./slidev/CodeBlockWrapper-CtOTSI0f.js";var p={__name:`slides.md__slidev_15`,setup(p){let{$slidev:m,$nav:h,$clicksContext:g,$clicks:_,$page:v,$renderContext:y,$frontmatter:b}=l();return g.setup(),(l,p)=>{let m=f;return e(),s(d,c(n(a(u)(a(b),14))),{default:r(()=>[p[2]||=o(`h2`,null,`🐛 Debugging: "headers already sent" 错误`,-1),p[3]||=o(`h3`,null,`错误信息`,-1),t(m,{title:``,ranges:[]},{default:r(()=>[...p[0]||=[o(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light slidev-code`,style:{"--shiki-dark":`#dbd7caee`,"--shiki-light":`#393a34`,"--shiki-dark-bg":`#121212`,"--shiki-light-bg":`#ffffff`}},[o(`code`,{class:`language-text`},[o(`span`,{class:`line`},[o(`span`,null,`Warning: session_start(): Cannot start session when headers already sent in ...`)])])],-1)]]),_:1}),p[4]||=o(`h3`,null,`快速排查清单`,-1),t(m,{title:``,ranges:[]},{default:r(()=>[...p[1]||=[o(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light slidev-code`,style:{"--shiki-dark":`#dbd7caee`,"--shiki-light":`#393a34`,"--shiki-dark-bg":`#121212`,"--shiki-light-bg":`#ffffff`}},[o(`code`,{class:`language-text`},[o(`span`,{class:`line`},[o(`span`,null,`❌ 错误示范                          ✅ 正确做法`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)]),i(`
`),o(`span`,{class:`line`},[o(`span`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`<?php                              <?php`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`  echo "Hello";       ✗ 先输出了    session_start();  ✓ 先启动`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`  session_start();                    echo "Hello";`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`?>                                  ?>`)]),i(`
`),o(`span`,{class:`line`},[o(`span`)]),i(`
`),o(`span`,{class:`line`},[o(`span`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`UTF-8 with BOM                      UTF-8 without BOM`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`├─ BOM字符在<?php前输出              ├─ 无隐藏字符`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`└─ 导致headers已发送                 └─ 正常执行`)]),i(`
`),o(`span`,{class:`line`},[o(`span`)]),i(`
`),o(`span`,{class:`line`},[o(`span`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`HTML在<?php之前                     <?php在最开头`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`<html>                             <?php`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`<?php                               session_start();`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`  session_start();                  ?>`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`?>                                  <html>`)])])],-1)]]),_:1})]),_:1},16)}}};export{p as default};