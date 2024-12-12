import{_ as i,c as a,a0 as t,o as e}from"./chunks/framework.p2VkXzrt.js";const o=JSON.parse('{"title":"Finding Data","description":"","frontmatter":{},"headers":[],"relativePath":"en/guides/finding-data.md","filePath":"en/guides/finding-data.md"}'),n={name:"en/guides/finding-data.md"};function h(r,s,l,d,p,k){return e(),a("div",null,s[0]||(s[0]=[t('<h1 id="finding-data" tabindex="-1">Finding Data <a class="header-anchor" href="#finding-data" aria-label="Permalink to &quot;Finding Data&quot;">​</a></h1><h2 id="findfirst-returns-the-first-record-that-matches-the-where-filters" tabindex="-1"><code>findFirst</code> returns the first record that matches the <code>where</code> filters: <a class="header-anchor" href="#findfirst-returns-the-first-record-that-matches-the-where-filters" aria-label="Permalink to &quot;`findFirst` returns the first record that matches the `where` filters:&quot;">​</a></h2><div class="language-Typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> user</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> users.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findFirst</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ where: { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Alice&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } })</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(user.data)</span></span></code></pre></div><h2 id="findmany-returns-all-matching-records" tabindex="-1"><code>findMany</code> returns all matching records: <a class="header-anchor" href="#findmany-returns-all-matching-records" aria-label="Permalink to &quot;`findMany` returns all matching records:&quot;">​</a></h2><div class="language-Typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> activeUsers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> users.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findMany</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  where: { status: { equals: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(activeUsers.data)</span></span></code></pre></div>',5)]))}const g=i(n,[["render",h]]);export{o as __pageData,g as default};