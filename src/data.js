export const ADMIN = { username: 'admin', password: 'raspberry' };

export const INITIAL_POSTS = [
  {
    id: 1,
    title: 'Getting Started with Raspberry Pi',
    slug: 'getting-started-raspberry-pi',
    tag: 'Raspberry Pi',
    excerpt: 'Exploring the world of Raspberry Pi web hosting and what makes it such a powerful tool.',
    content: `The Raspberry Pi is a tiny, affordable computer that changed the world of DIY electronics and education. At the heart of this project is a simulated Pi web server — showing exactly how you'd deploy a React app on real hardware.

Setting up is straightforward: install Raspbian OS, enable SSH, install Nginx and Node.js, then clone your project. The Pi handles surprisingly heavy loads for its size, making it perfect for a personal blog or portfolio.

Key specs of the Pi 4: 4GB RAM, quad-core ARM Cortex-A72, Gigabit Ethernet, dual-band Wi-Fi. More than enough to serve hundreds of concurrent visitors.

This project demonstrates that even a $35 computer can host a modern React application with full CRUD functionality, a polished UI, and a live admin panel.`,
    date: '2024-03-01',
  },
  {
    id: 2,
    title: 'Why React is Perfect for Pi Projects',
    slug: 'react-perfect-for-pi',
    tag: 'Web Dev',
    excerpt: 'React and Raspberry Pi are a match made in heaven — here is why this combination works so well.',
    content: `React is a lightweight JavaScript library for building user interfaces — and when paired with a static file server on a Raspberry Pi, it becomes incredibly powerful. The built app is just HTML, CSS, and JS files that Nginx serves directly.

Unlike server-rendered apps, a React SPA (Single Page Application) does all its work in the browser. This means the Pi's CPU is barely used — it just serves static files and Nginx handles that effortlessly.

The build process is simple: run npm run build, copy the output to /var/www/html, and Nginx serves it. No Python, no Node runtime needed in production — just pure static files.

This architecture is ideal for low-power hardware like the Pi because the heavy lifting happens on the visitor's device, not on the Pi itself.`,
    date: '2024-03-05',
  },
  {
    id: 3,
    title: 'Nginx as a Static File Server on Pi',
    slug: 'nginx-static-server-pi',
    tag: 'DevOps',
    excerpt: 'How Nginx serves our React build on a Raspberry Pi with incredible efficiency.',
    content: `Nginx is one of the most efficient web servers ever built. On a Raspberry Pi, it acts as the front door — serving our React build files directly to any browser that connects.

The configuration is minimal: point the root directory at the React build folder, set up a try_files directive to handle React Router, and done. Nginx handles hundreds of concurrent connections while barely touching the Pi's CPU.

Static file serving is where Nginx truly shines. It reads files from disk and sends them over the network with zero processing overhead. On a Pi 4 with a fast SD card or USB SSD, response times are under 10ms.

This is the production-ready setup: React build files + Nginx on a Pi = a real, live website hosted on $35 of hardware.`,
    date: '2024-03-10',
  },
];
