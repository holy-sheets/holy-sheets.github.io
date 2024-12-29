import{_ as t,o as a,c as i,a2 as s}from"./chunks/framework.CAv1dD81.js";const k=JSON.parse('{"title":"Querying Data","description":"","frontmatter":{},"headers":[],"relativePath":"en/concepts/querying-data.md","filePath":"en/concepts/querying-data.md"}'),n={name:"en/concepts/querying-data.md"};function d(o,e,l,r,h,c){return a(),i("div",null,e[0]||(e[0]=[s(`<h1 id="querying-data" tabindex="-1">Querying Data <a class="header-anchor" href="#querying-data" aria-label="Permalink to &quot;Querying Data&quot;">​</a></h1><p>HolySheets provides a suite of methods to efficiently query data from your Google Sheets. Whether you need to retrieve a single record, multiple records, or all records, HolySheets offers flexible options to tailor your queries to your specific needs.</p><p>The primary methods for querying data are:</p><ul><li><code>findFirst</code></li><li><code>findMany</code></li><li><code>findAll</code></li></ul><p>Each method allows you to specify filters using the <code>where</code> clause and limit the fields returned using the <code>select</code> clause.</p><h2 id="findfirst" tabindex="-1">findFirst <a class="header-anchor" href="#findfirst" aria-label="Permalink to &quot;findFirst&quot;">​</a></h2><p>Retrieves the first record that matches the specified <code>where</code> conditions.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-Typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Retrieve the first record where name is &#39;Alice&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> holySheetsInstance.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findFirst</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  where: { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Alice&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  select: { id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, email: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  includeMetadata: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>where</code></td><td><code>WhereClause</code></td><td><code>undefined</code></td><td>Filters to apply when searching for records.</td></tr><tr><td><code>select</code></td><td><code>SelectClause</code></td><td><code>All Fields</code></td><td>Specifies which fields to include in the returned record.</td></tr></tbody></table><h3 id="configs" tabindex="-1">Configs <a class="header-anchor" href="#configs" aria-label="Permalink to &quot;Configs&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Config</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>includeMetadata</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Determines whether to include metadata in the response.</td></tr></tbody></table><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p>A promise that resolves to a <code>SanitizedOperationResult</code> containing the first matching record and optional metadata.</p><h2 id="findmany" tabindex="-1">findMany <a class="header-anchor" href="#findmany" aria-label="Permalink to &quot;findMany&quot;">​</a></h2><p>Retrieves multiple records that match the specified <code>where</code> conditions.</p><h3 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-Typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Retrieve all records where age is greater than 18</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> results</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> holySheetsInstance.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findMany</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  where: { age: { gt: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  select: { name: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, email: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  includeMetadata: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h3 id="options-1" tabindex="-1">Options <a class="header-anchor" href="#options-1" aria-label="Permalink to &quot;Options&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>where</code></td><td><code>WhereClause</code></td><td><code>undefined</code></td><td>Filters to apply when searching for records.</td></tr><tr><td><code>select</code></td><td><code>SelectClause</code></td><td><code>All Fields</code></td><td>Specifies which fields to include in the returned record.</td></tr></tbody></table><h3 id="configs-1" tabindex="-1">Configs <a class="header-anchor" href="#configs-1" aria-label="Permalink to &quot;Configs&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Config</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>includeMetadata</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Determines whether to include metadata in the response.</td></tr></tbody></table><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p>A promise that resolves to a <code>SanitizedBatchOperationResult</code> containing the matching records and optional metadata.</p><h2 id="findall" tabindex="-1">findAll <a class="header-anchor" href="#findall" aria-label="Permalink to &quot;findAll&quot;">​</a></h2><p><strong>(Added in version 2.1.0)</strong></p><p>Retrieves all records from the specified sheet, with optional selection of fields and inclusion of empty rows.</p><h3 id="example-2" tabindex="-1">Example <a class="header-anchor" href="#example-2" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-Typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Retrieve all records, including empty rows</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> allRecords</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> holySheetsInstance.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findAll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  includeEmptyRows: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  includeMetadata: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h3 id="options-2" tabindex="-1">Options <a class="header-anchor" href="#options-2" aria-label="Permalink to &quot;Options&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>select</code></td><td><code>SelectClause</code></td><td><code>All Fields</code></td><td>Specifies which fields to include in the returned records.</td></tr><tr><td><code>includeEmptyRows</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Determines whether to include empty rows in the response.</td></tr></tbody></table><h3 id="configs-2" tabindex="-1">Configs <a class="header-anchor" href="#configs-2" aria-label="Permalink to &quot;Configs&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Config</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>includeMetadata</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Determines whether to include metadata in the response.</td></tr></tbody></table><h3 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p>A promise that resolves to a <code>SanitizedBatchOperationResult</code> containing all records and optional metadata.</p><hr><h2 id="understanding-the-options-and-configs" tabindex="-1">Understanding the Options and Configs <a class="header-anchor" href="#understanding-the-options-and-configs" aria-label="Permalink to &quot;Understanding the Options and Configs&quot;">​</a></h2><p>To effectively utilize HolySheets! querying methods, it&#39;s essential to understand the <code>options</code> and <code>configs</code> parameters that can be passed to each method.</p><h3 id="options-3" tabindex="-1">Options <a class="header-anchor" href="#options-3" aria-label="Permalink to &quot;Options&quot;">​</a></h3><p>The <code>options</code> parameter allows you to customize the data retrieval process. Common options include:</p><ul><li><strong><code>where</code></strong>: Defines the conditions to filter records. It accepts a <code>WhereClause</code> object.</li><li><strong><code>select</code></strong>: Specifies which fields to include in the returned records. It accepts a <code>SelectClause</code> object.</li><li><strong><code>includeEmptyRows</code></strong>: Determines whether to include empty rows in the response. Available in <code>findAll</code> only.</li></ul><h3 id="configs-3" tabindex="-1">Configs <a class="header-anchor" href="#configs-3" aria-label="Permalink to &quot;Configs&quot;">​</a></h3><p>The <code>configs</code> parameter allows you to configure operational aspects of the data retrieval process. Common configs include:</p><ul><li><strong><code>includeMetadata</code></strong>: When set to <code>true</code>, the response will include metadata about the operation, such as duration and status.</li></ul><hr><h2 id="version-history" tabindex="-1">Version History <a class="header-anchor" href="#version-history" aria-label="Permalink to &quot;Version History&quot;">​</a></h2><ul><li><strong>Version 2.1.0</strong>: Introduced the <code>findAll</code> method for retrieving all records with additional options.</li></ul><hr><h2 id="additional-notes" tabindex="-1">Additional Notes <a class="header-anchor" href="#additional-notes" aria-label="Permalink to &quot;Additional Notes&quot;">​</a></h2><p>HolySheets leverages <code>where</code> filters to enable powerful and flexible querying capabilities. These filters allow you to define precise conditions for selecting records, ensuring that your data retrieval is both efficient and tailored to your specific requirements.</p>`,51)]))}const u=t(n,[["render",d]]);export{k as __pageData,u as default};
