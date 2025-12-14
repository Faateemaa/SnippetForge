const snippets = [
  // ================= JS =================
  {
    id: 1,
    title: "Array Map",
    code: "const doubled = arr.map(n => n * 2);",
    tags: ["js", "array"],
  },
  {
    id: 2,
    title: "Array Filter",
    code: "const evens = arr.filter(n => n % 2 === 0);",
    tags: ["js", "array"],
  },
  {
    id: 3,
    title: "Array Reduce",
    code: "const sum = arr.reduce((a, b) => a + b, 0);",
    tags: ["js", "array"],
  },
  {
    id: 4,
    title: "Optional Chaining",
    code: "const name = user?.profile?.name;",
    tags: ["js", "syntax"],
  },
  {
    id: 5,
    title: "Nullish Coalescing",
    code: "const value = input ?? 'default';",
    tags: ["js", "syntax"],
  },
  {
    id: 6,
    title: "Debounce Function",
    code: "const debounce=(fn,d)=>{let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),d)}};",
    tags: ["js", "performance"],
  },
  {
    id: 7,
    title: "Throttle Function",
    code: "const throttle=(fn,d)=>{let l=0;return(...a)=>{const n=Date.now();if(n-l>d){l=n;fn(...a)}}};",
    tags: ["js", "performance"],
  },
  {
    id: 8,
    title: "LocalStorage Save",
    code: "localStorage.setItem('key', JSON.stringify(value));",
    tags: ["js", "storage"],
  },
  {
    id: 9,
    title: "LocalStorage Read",
    code: "JSON.parse(localStorage.getItem('key'));",
    tags: ["js", "storage"],
  },
  {
    id: 10,
    title: "Random ID",
    code: "Math.random().toString(36).slice(2);",
    tags: ["js", "utility"],
  },

  // ================= React =================
  {
    id: 11,
    title: "useState Hook",
    code: "const [count, setCount] = useState(0);",
    tags: ["react", "hooks"],
  },
  {
    id: 12,
    title: "useEffect Hook",
    code: "useEffect(() => { console.log('mounted'); }, []);",
    tags: ["react", "hooks"],
  },
  {
    id: 13,
    title: "Controlled Input",
    code: "<input value={val} onChange={e => setVal(e.target.value)} />",
    tags: ["react", "forms"],
  },
  {
    id: 14,
    title: "Conditional Render",
    code: "{isAuth && <Dashboard />}",
    tags: ["react", "render"],
  },
  {
    id: 15,
    title: "List Rendering",
    code: "{items.map(i => <li key={i.id}>{i.name}</li>)}",
    tags: ["react", "lists"],
  },
  {
    id: 16,
    title: "Props Destructuring",
    code: "function Card({ title }) { return <h2>{title}</h2>; }",
    tags: ["react", "props"],
  },
  {
    id: 17,
    title: "useRef Example",
    code: "const inputRef = useRef(null);",
    tags: ["react", "hooks"],
  },
  {
    id: 18,
    title: "useMemo Example",
    code: "const value = useMemo(() => calc(a), [a]);",
    tags: ["react", "performance"],
  },
  {
    id: 19,
    title: "useCallback Example",
    code: "const memoFn = useCallback(() => fn(), []);",
    tags: ["react", "performance"],
  },
  {
    id: 20,
    title: "Fragment",
    code: "<><Header /><Main /></>",
    tags: ["react", "syntax"],
  },

  // ================= Next.js =================
  {
    id: 21,
    title: "Next Page",
    code: "export default function Home(){ return <h1>Hello</h1> }",
    tags: ["next", "page"],
  },
  {
    id: 22,
    title: "Next Link",
    code: "import Link from 'next/link'; <Link href='/about'>About</Link>;",
    tags: ["next", "routing"],
  },
  {
    id: 23,
    title: "Next Image",
    code: "import Image from 'next/image'; <Image src='/img.png' width={200} height={200} />;",
    tags: ["next", "image"],
  },
  {
    id: 24,
    title: "getServerSideProps",
    code: "export async function getServerSideProps(){ return { props:{} }; }",
    tags: ["next", "ssr"],
  },
  {
    id: 25,
    title: "API Route",
    code: "export default function handler(req,res){ res.status(200).json({ok:true}); }",
    tags: ["next", "api"],
  },

  // ================= Node.js =================
  {
    id: 26,
    title: "Express Server",
    code: "const app=require('express')(); app.listen(3000);",
    tags: ["node", "express"],
  },
  {
    id: 27,
    title: "Express Route",
    code: "app.get('/api',(req,res)=>res.json({ok:true}));",
    tags: ["node", "express"],
  },
  {
    id: 28,
    title: "Middleware",
    code: "app.use((req,res,next)=>{ console.log(req.url); next(); });",
    tags: ["node", "middleware"],
  },
  {
    id: 29,
    title: "Read File",
    code: "require('fs').readFileSync('file.txt','utf8');",
    tags: ["node", "fs"],
  },
  {
    id: 30,
    title: "Env Variable",
    code: "process.env.NODE_ENV",
    tags: ["node", "env"],
  },

  // ================= Java =================
  {
    id: 31,
    title: "Main Method",
    code: 'public static void main(String[] args) { System.out.println("Hi"); }',
    tags: ["java", "core"],
  },
  {
    id: 32,
    title: "For Loop",
    code: "for(int i=0;i<10;i++){ System.out.println(i); }",
    tags: ["java", "loop"],
  },
  {
    id: 33,
    title: "ArrayList",
    code: "List<String> list = new ArrayList<>();",
    tags: ["java", "collections"],
  },
  {
    id: 34,
    title: "HashMap",
    code: "Map<String,Integer> map = new HashMap<>();",
    tags: ["java", "collections"],
  },
  {
    id: 35,
    title: "Try Catch",
    code: "try { } catch(Exception e) { e.printStackTrace(); }",
    tags: ["java", "exception"],
  },

  // ================= Spring Boot =================
  {
    id: 36,
    title: "Spring Boot App",
    code: "@SpringBootApplication public class App {}",
    tags: ["spring", "boot"],
  },
  {
    id: 37,
    title: "Rest Controller",
    code: "@RestController class Api {}",
    tags: ["spring", "controller"],
  },
  {
    id: 38,
    title: "Get Mapping",
    code: '@GetMapping("/api") public String api(){ return "ok"; }',
    tags: ["spring", "mapping"],
  },
  {
    id: 39,
    title: "Autowired",
    code: "@Autowired private UserService service;",
    tags: ["spring", "di"],
  },
  {
    id: 40,
    title: "JPA Entity",
    code: "@Entity class User { @Id Long id; }",
    tags: ["spring", "jpa"],
  },

  // ================= SQL =================
  {
    id: 41,
    title: "Select All",
    code: "SELECT * FROM users;",
    tags: ["sql", "query"],
  },
  {
    id: 42,
    title: "Where Clause",
    code: "SELECT * FROM users WHERE age > 18;",
    tags: ["sql", "filter"],
  },
  {
    id: 43,
    title: "Insert Row",
    code: "INSERT INTO users(name,email) VALUES('a','b');",
    tags: ["sql", "insert"],
  },
  {
    id: 44,
    title: "Update Row",
    code: "UPDATE users SET name='x' WHERE id=1;",
    tags: ["sql", "update"],
  },
  {
    id: 45,
    title: "Delete Row",
    code: "DELETE FROM users WHERE id=1;",
    tags: ["sql", "delete"],
  },

  // ================= HTML/CSS =================
  {
    id: 46,
    title: "Semantic HTML",
    code: "<header></header><main></main><footer></footer>",
    tags: ["html", "semantic"],
  },
  {
    id: 47,
    title: "Flex Center",
    code: "display:flex;justify-content:center;align-items:center;",
    tags: ["css", "flexbox"],
  },
  {
    id: 48,
    title: "Grid Layout",
    code: "display:grid;grid-template-columns:repeat(3,1fr);",
    tags: ["css", "grid"],
  },
  {
    id: 49,
    title: "CSS Variable",
    code: ":root{--primary:#4f46e5;}",
    tags: ["css", "variables"],
  },
  {
    id: 50,
    title: "Media Query",
    code: "@media(max-width:768px){.box{padding:1rem}}",
    tags: ["css", "responsive"],
  },

  // ================= Git =================
  {
    id: 51,
    title: "Git Clone",
    code: "git clone repo_url",
    tags: ["git", "cli"],
  },
  { id: 52, title: "Git Status", code: "git status", tags: ["git", "cli"] },
  {
    id: 53,
    title: "Git Commit",
    code: "git commit -m 'message'",
    tags: ["git", "cli"],
  },
  {
    id: 54,
    title: "Git Branch",
    code: "git checkout -b feature",
    tags: ["git", "branch"],
  },
  {
    id: 55,
    title: "Git Merge",
    code: "git merge main",
    tags: ["git", "merge"],
  },

  // ================= Misc / Utils =================
  {
    id: 56,
    title: "Date ISO",
    code: "new Date().toISOString();",
    tags: ["js", "date"],
  },
  {
    id: 57,
    title: "Clipboard Copy",
    code: "navigator.clipboard.writeText(text);",
    tags: ["js", "browser"],
  },
  {
    id: 58,
    title: "JSON Parse",
    code: "JSON.parse(jsonString);",
    tags: ["js", "json"],
  },
  {
    id: 59,
    title: "JSON Stringify",
    code: "JSON.stringify(obj, null, 2);",
    tags: ["js", "json"],
  },
  {
    id: 60,
    title: "Intl Format",
    code: "new Intl.NumberFormat('en-US').format(123456);",
    tags: ["js", "intl"],
  },

  // ================= Extra =================
  {
    id: 61,
    title: "Promise All",
    code: "Promise.all([p1,p2]).then(res=>{});",
    tags: ["js", "promise"],
  },
  {
    id: 62,
    title: "Set Timeout",
    code: "setTimeout(()=>console.log('hi'),1000);",
    tags: ["js", "timer"],
  },
  {
    id: 63,
    title: "Set Interval",
    code: "setInterval(()=>console.log('tick'),1000);",
    tags: ["js", "timer"],
  },
  {
    id: 64,
    title: "Arrow Function",
    code: "const add = (a,b) => a + b;",
    tags: ["js", "function"],
  },
  {
    id: 65,
    title: "Destructuring",
    code: "const { name, age } = user;",
    tags: ["js", "syntax"],
  },
  {
    id: 66,
    title: "Spread Operator",
    code: "const copy = { ...obj };",
    tags: ["js", "syntax"],
  },
  {
    id: 67,
    title: "Rest Params",
    code: "function sum(...nums){ return nums.reduce((a,b)=>a+b,0); }",
    tags: ["js", "function"],
  },
  {
    id: 68,
    title: "Default Params",
    code: "function greet(name='Guest'){ return name; }",
    tags: ["js", "function"],
  },
  {
    id: 69,
    title: "Fetch Async",
    code: "const res = await fetch(url); const data = await res.json();",
    tags: ["js", "async"],
  },
  {
    id: 70,
    title: "Try Catch JS",
    code: "try { } catch(e) { console.error(e); }",
    tags: ["js", "error"],
  },

  // ================= Final 10 =================
  {
    id: 71,
    title: "SQL Join",
    code: "SELECT * FROM a JOIN b ON a.id=b.id;",
    tags: ["sql", "join"],
  },
  {
    id: 72,
    title: "SQL Group By",
    code: "SELECT role, COUNT(*) FROM users GROUP BY role;",
    tags: ["sql", "group"],
  },
  {
    id: 73,
    title: "Spring Service",
    code: "@Service class UserService {}",
    tags: ["spring", "service"],
  },
  {
    id: 74,
    title: "Spring Repository",
    code: "interface Repo extends JpaRepository<User,Long> {}",
    tags: ["spring", "jpa"],
  },
  {
    id: 75,
    title: "Java Stream",
    code: "list.stream().filter(x->x>5).toList();",
    tags: ["java", "stream"],
  },
  {
    id: 76,
    title: "Java Lambda",
    code: "(a,b) -> a + b",
    tags: ["java", "lambda"],
  },
  {
    id: 77,
    title: "Node Fetch",
    code: "const fetch = require('node-fetch');",
    tags: ["node", "http"],
  },
  {
    id: 78,
    title: "Next Head",
    code: "import Head from 'next/head';",
    tags: ["next", "seo"],
  },
  {
    id: 79,
    title: "Next Layout",
    code: "export default function Layout({children}){return <>{children}</>}",
    tags: ["next", "layout"],
  },
  {
    id: 80,
    title: "React Context",
    code: "const Ctx = createContext(null);",
    tags: ["react", "context"],
  },
];

export default snippets;
