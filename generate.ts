import fs from 'fs';
import pug from 'pug';
import { marked } from 'marked';
import { load } from 'cheerio';
const renderer = new marked.Renderer();

renderer.heading = function (text, level) {
  const uniqueId = text.toLowerCase().replace(/[^\w]+/g, '-') + '-' + Date.now();

  return `
    <h${level} id="${uniqueId}">
      ${text}
    </h${level}>
  `;
};

marked.setOptions({
    renderer
});

interface NavItem {
    text: string;
    level: number;
    id?: string;
    children: NavItem[];
}

interface FlatItem {
    text: string;
    level: number;
    id?: string;
    children?: FlatItem[];
}

function buildHierarchy(flatList: FlatItem[]): FlatItem | null {
    const stack: FlatItem[] = [];
    let root: FlatItem | null = null;

    flatList.forEach(item => {
        const newItem: FlatItem = { ...item, children: [] };
        
        while (stack.length > 0 && stack[stack.length - 1].level >= newItem.level) {
            stack.pop();
        }
        
        if (stack.length === 0) {
            root = newItem;  // If stack is empty, this item is the root
        } else {
            const parent = stack[stack.length - 1];
            parent.children!.push(newItem);
        }
        
        stack.push(newItem);
    });

    return root;
}

const markdownToHTML = (options: {input: string, output: string}): void => {
    const { input, output } = options;
    fs.readFile(input, 'utf8', async (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
    
        const contentHTMLString = await marked(data);
        const contentHTML = load(contentHTMLString);
        const headers = contentHTML('h1,h2,h3,h4,h5,h6');
        const headersList = headers.map((_index, header): NavItem => {
            const id = contentHTML(header).attr('id');
            const text = contentHTML(header).text();
            const level = parseInt(header.tagName.replace('h', ''));
            return { text, level, id, children: []};
        })
    
        const items = buildHierarchy(headersList.toArray());
    
        const html = pug.renderFile('template.pug', {
            pageTitle: 'HolySheets! Documentation',
            content: contentHTML('body').html(),
            items
        });
    
        fs.writeFile(output, html, 'utf8', (err) => {
            if (err) {
                console.error(err);
            }
        });
    });
}

const copyFile = (source: string, target: string): void => {
    fs.copyFile(source, target, (err) => {
        if (err) {
            console.error(err);
        }
    });
}

const createDirectory = (path: string): void => {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
}

createDirectory('docs');

markdownToHTML({
  input: 'node_modules/holysheets/README.md',
  output: 'index.html'
});

markdownToHTML({
  input: 'node_modules/holysheets/docs/getting-credentials.md',
  output: 'getting-credentials.html'
});

copyFile('node_modules/holysheets/docs/logo.svg', 'docs/logo.svg');