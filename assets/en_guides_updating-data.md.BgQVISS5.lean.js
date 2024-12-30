import{_ as t,o as a,c as s,a2 as i}from"./chunks/framework.CAv1dD81.js";const u=JSON.parse('{"title":"Updating Data","description":"","frontmatter":{},"headers":[],"relativePath":"en/guides/updating-data.md","filePath":"en/guides/updating-data.md"}'),n={name:"en/guides/updating-data.md"};function d(o,e,h,l,r,p){return a(),s("div",null,e[0]||(e[0]=[i(`<h1 id="updating-data" tabindex="-1">Updating Data <a class="header-anchor" href="#updating-data" aria-label="Permalink to &quot;Updating Data&quot;">​</a></h1><p>HolySheets! provides a set of methods to help you update existing data in your Google Sheets. Whether you need to update a single record or multiple records at once, HolySheets! offers clear and concise methods to handle your update operations.</p><p>The primary methods for updating data are:</p><ul><li><code>updateFirst</code></li><li><code>updateMany</code></li></ul><p>Each method allows you to specify filters using the <code>where</code> clause and provide the fields to update in the <code>data</code> object.</p><h2 id="updatefirst" tabindex="-1">updateFirst <a class="header-anchor" href="#updatefirst" aria-label="Permalink to &quot;updateFirst&quot;">​</a></h2><p>Updates the <strong>first record</strong> that matches the specified <code>where</code> conditions.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-Typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Update the first record where name is &#39;Alice&#39; and set status to &#39;inactive&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> holySheetsInstance.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">updateFirst</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    where: { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Alice&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data: { status: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;inactive&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    includeMetadata: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>where</code></td><td><code>WhereClause&lt;RecordType&gt;</code></td><td><code>undefined</code></td><td>Filters to apply when searching for the record to update.</td></tr><tr><td><code>data</code></td><td><code>Partial&lt;RecordType&gt;</code></td><td><code>undefined</code></td><td>Key-value pairs representing the fields to update in the record.</td></tr></tbody></table><h3 id="configs" tabindex="-1">Configs <a class="header-anchor" href="#configs" aria-label="Permalink to &quot;Configs&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Config</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>includeMetadata</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Determines whether to include metadata in the response.</td></tr></tbody></table><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p>A promise that resolves to a <code>OperationResult&lt;RecordType&gt;</code> containing the updated record and optional metadata.</p><hr><h2 id="updatemany" tabindex="-1">updateMany <a class="header-anchor" href="#updatemany" aria-label="Permalink to &quot;updateMany&quot;">​</a></h2><p>Updates <strong>all records</strong> that match the specified <code>where</code> conditions.</p><h3 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-Typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Update all records where status is &#39;active&#39; to &#39;inactive&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> results</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> holySheetsInstance.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">updateMany</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    where: { status: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data: { status: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;inactive&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    includeMetadata: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="options-1" tabindex="-1">Options <a class="header-anchor" href="#options-1" aria-label="Permalink to &quot;Options&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>where</code></td><td><code>WhereClause&lt;RecordType&gt;</code></td><td><code>undefined</code></td><td>Filters to apply when searching for records to update.</td></tr><tr><td><code>data</code></td><td><code>Partial&lt;RecordType&gt;</code></td><td><code>undefined</code></td><td>Key-value pairs representing the fields to update in each record.</td></tr></tbody></table><h3 id="configs-1" tabindex="-1">Configs <a class="header-anchor" href="#configs-1" aria-label="Permalink to &quot;Configs&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Config</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>includeMetadata</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Determines whether to include metadata in the response.</td></tr></tbody></table><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p>A promise that resolves to a <code>BatchOperationResult&lt;RecordType&gt;</code> containing all updated records and optional metadata.</p><hr><h2 id="understanding-the-options-and-configs" tabindex="-1">Understanding the Options and Configs <a class="header-anchor" href="#understanding-the-options-and-configs" aria-label="Permalink to &quot;Understanding the Options and Configs&quot;">​</a></h2><p>To effectively utilize HolySheets! updating methods, it&#39;s essential to understand the <code>options</code> and <code>configs</code> parameters that can be passed to each method.</p><h3 id="options-2" tabindex="-1">Options <a class="header-anchor" href="#options-2" aria-label="Permalink to &quot;Options&quot;">​</a></h3><ul><li><strong><code>where</code></strong>: Defines the conditions to filter which record(s) should be updated. Accepts a <code>WhereClause&lt;RecordType&gt;</code> object.</li><li><strong><code>data</code></strong>: Specifies the new field values to set in the matched record(s). Accepts a <code>Partial&lt;RecordType&gt;</code> object containing key-value pairs of the fields to be updated.</li></ul><h3 id="configs-2" tabindex="-1">Configs <a class="header-anchor" href="#configs-2" aria-label="Permalink to &quot;Configs&quot;">​</a></h3><ul><li><strong><code>includeMetadata</code></strong>: When set to <code>true</code>, the response will include metadata about the operation, such as duration, number of affected rows, and status.</li></ul><hr><h2 id="version-history" tabindex="-1">Version History <a class="header-anchor" href="#version-history" aria-label="Permalink to &quot;Version History&quot;">​</a></h2><ul><li><strong>Version 2.0.0</strong>: Introduced the <code>updateFirst</code> and <code>updateMany</code> methods for updating data.</li></ul><hr><h2 id="additional-notes" tabindex="-1">Additional Notes <a class="header-anchor" href="#additional-notes" aria-label="Permalink to &quot;Additional Notes&quot;">​</a></h2><ul><li>HolySheets! leverages the same <code>where</code> filters used in finding data, so you can refine which record(s) to update with great precision.</li><li>When updating multiple records via <code>updateMany</code>, <strong>all</strong> records matching the <code>where</code> clause will be updated, so use the filter carefully to avoid unintended changes.</li><li>Make sure your <code>data</code> object contains only the fields you intend to update. Fields not included in <code>data</code> remain unchanged.</li></ul>`,39)]))}const k=t(n,[["render",d]]);export{u as __pageData,k as default};