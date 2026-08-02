/* ================================================================
   EDIT YOUR CONTENT HERE
   ----------------------------------------------------------------
   This whole site is driven by the arrays below. To add a new
   entry, copy an existing object in the array, paste it, and
   change the text. Nothing else on the page needs to change —
   just save the file and refresh your browser (or re-upload it
   wherever you're hosting it).
   ================================================================ */

const DATA = {

  gpa: "4.0 / 4.0",

  coursework: [
    "Object-Oriented Programming", "Data Structures & Algorithms",
    "Linear Algebra", "Calculus II", "Programming Methodology", "Statistics I"
  ],

  orgs: [
    "MassAI", "CICSoft UMass", "UMass Product",
    "ICPC", "Hack(Her)413"
  ],

  // Add a new honor by copying one of these objects.
  honors: [
    { name: "Dean's List", org: "UMass Amherst", desc: "Selected for excellent academic performance." },
    { name: "Chancellor's Award", org: "UMass Amherst", desc: "$18,000 scholarship for sustained academic performance." },
    { name: "Attainment Award", org: "High School", desc: "Awarded for excelled accomplishment across Physics and History." },
    { name: "Honored Selectee", org: "FCT Club", desc: "Prestigious CS program with a 10% acceptance rate." },
    { name: "Best Learner Award", org: "FCT Club", desc: "Given to the top 10% of the club for vigor in mastering new CS concepts." }
  ],

  // Add a new job by copying one of these objects. Newest first.
  experience: [
    {
      role: "Software Engineer",
      org: "FPT Software · Hoa Lac, Hanoi, Vietnam",
      date: "June 2026 — August 2026",
      bullets: [
        "Analyzed data for a company-wide internal marketing campaign for corporate-sponsored courses.",
        "Categorized more than 20,000 internal users into low, medium, and high-engagement segments.",
        "Identified low-engagement users as the target demographic, and low-engaged courses as candidates for removal."
      ],
      stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"]
    },
    {
      role: "Coding Instructor & Hackathon Organizer",
      org: "BVIS Technology Committee · Hanoi, Vietnam",
      date: "August 2023 — April 2024",
      bullets: [
        "Led an intermediate web development class as lead instructor, teaching HTML, CSS, and JavaScript to 35 students.",
        "Developed 95% of the course's slides and lessons, with roughly 80% of learners approving of the lectures.",
        "Mentored 2 coworkers and wrote syllabus plans and lecture slides that are still used today."
      ],
      stack: ["HTML", "CSS", "JavaScript"]
    }
  ],

  // Add a new project by copying one of these objects.
  projects: [
    {
      name: "Automata of War",
      date: "August — November 2025",
      blurb: "A research website and game that simulates Conway's Game of Life at 60 FPS, with AI explaining the patterns as they emerge.",
      bullets: [
        "Led development of a site simulating the original Game of Life at 60 FPS.",
        "Integrated learning algorithms to identify emerging patterns, optimized to hold 60 FPS.",
        "Integrated AI narration of the patterns on screen, raising accessibility and interactivity."
      ],
      stack: ["Python", "PygBag", "HTML", "CSS", "OOP"],
      link: "https://dinhduydev.github.io/automata_of_war/"
    },
   {
      name: "Custom Mini AWS EC2",
      date: "July - August 2026",
      blurb: "An emulation of Amazon's AWS EC2.",
      bullets: [
            "Built end-to-end replication of AWS EC2, using Docker containers as the compute engine and a custom REST API as the orchestration layer for anyone to learn more about cloud architecture \& Docker environments."
            "Enforced real CPU and memory limits per container using Docker's nano_cpus and mem_limit configuration. Implemented EC2-style instance-type presets (t3.micro–t3.large)."
            "Developed a FastAPI backend to manage instances, exposing endpoints to create, list, start, stop, and terminate containerized instances programmatically via the Docker SDK for Python"
            "Built a curated image catalog abstraction, allowing users to launch pre-configured services (web servers, caches, blank OS instances) without needing to know underlying Docker image names."
            "Created a React JS user interface with live instance status polling, and full CRUD instance management through the API"
      ],
      stack: ["Python", "FastAPI", "Docker"],
      link: "https://github.com/DinhDuyDev/custom-made-ec2"
    },
    {
      name: "SciEncoder",
      date: "February — May 2026",
      blurb: "A domain-specific encoder built to aid the pre-training of a BERT model on scientific text.",
      bullets: [
        "Wrote Python scripts that scraped more than 10,000 papers' worth of text.",
        "Automated scraping across multiple Diamond Access scientific journals, increasing model accuracy and variety.",
        "Contributed a popular text corpus to the pre-training process."
      ],
      stack: ["Python", "BeautifulSoup", "BERT"],
      link: "https://github.com/DinhDuyDev/sciencoder-massai"
    },
  ],

  // Add a new skill group by copying one of these objects.
  skills: [
    { label: "Languages", items: ["C", "Java", "Python", "JavaScript", "SQL (MySQL)", "HTML/CSS"] },
    { label: "Frameworks", items: ["React", "Node.js", "JUnit", "FastAPI", "OpenCV", "SDL3"] },
    { label: "Developer tools", items: ["Git", "VS Code", "Visual Studio", "PyCharm", "IntelliJ", "Makefile"] },
    { label: "Libraries", items: ["Pandas", "NumPy", "Matplotlib", "Numba"] }
  ]
};

/* ================================================================
   RENDERING — you shouldn't need to touch anything below this line
   ================================================================ */

document.getElementById('stat-gpa').textContent = DATA.gpa;

const tagsHTML = arr => arr.map(t => `<span class="tag">${t}</span>`).join('');
document.getElementById('coursework-tags').innerHTML = tagsHTML(DATA.coursework);
document.getElementById('orgs-tags').innerHTML = tagsHTML(DATA.orgs);

document.getElementById('honors-list').innerHTML = DATA.honors.map(h => `
  <li>
    <span class="h-name">${h.name}</span> —
    <span class="h-org">${h.org}</span>
    <span class="h-desc">${h.desc}</span>
  </li>
`).join('');

document.getElementById('experience-timeline').innerHTML = DATA.experience.map(job => `
  <div class="tl-item">
    <span class="tl-date">${job.date}</span>
    <h3 class="tl-role">${job.role}</h3>
    <p class="tl-org">${job.org}</p>
    <ul>${job.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    <div class="tl-stack tag-list">${tagsHTML(job.stack)}</div>
  </div>
`).join('');

document.getElementById('project-grid').innerHTML = DATA.projects.map(p => `
  <div class="project-card">
    <h3><a href=${p.link}>${p.name}</a></h3>
    <span class="project-date">${p.date}</span>
    <p>${p.blurb}</p>
    <ul>${p.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    <div class="tag-list">${tagsHTML(p.stack)}</div>
  </div>
`).join('');

document.getElementById('skills-grid').innerHTML = DATA.skills.map(g => `
  <div class="skill-group">
    <span class="g-label">${g.label}</span>
    <div class="tag-list">${tagsHTML(g.items)}</div>
  </div>
`).join('');

document.getElementById('last-updated').textContent = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

/* ================================================================
   HERO SIGNATURE — a live, clickable Conway's Game of Life
   (a nod to the "Automata of War" project above)
   ================================================================ */
(function(){
  const canvas = document.getElementById('life-canvas');
  const ctx = canvas.getContext('2d');
  const hero = document.querySelector('.hero');
  const CELL = 16;
  let cols, rows, grid;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function makeGrid(randomize){
    const g = new Array(rows);
    for(let y=0;y<rows;y++){
      g[y] = new Array(cols);
      for(let x=0;x<cols;x++){
        g[y][x] = randomize && Math.random() < 0.16 ? 1 : 0;
      }
    }
    return g;
  }

  function resize(){
    const w = hero.offsetWidth, h = hero.offsetHeight;
    canvas.width = w; canvas.height = h;
    cols = Math.ceil(w / CELL) + 1;
    rows = Math.ceil(h / CELL) + 1;
    grid = makeGrid(true);
  }

  function neighbors(g, x, y){
    let n = 0;
    for(let dy=-1; dy<=1; dy++){
      for(let dx=-1; dx<=1; dx++){
        if(dx===0 && dy===0) continue;
        const ny=(y+dy+rows)%rows, nx=(x+dx+cols)%cols;
        n += g[ny][nx];
      }
    }
    return n;
  }

  function step(){
    const next = makeGrid(false);
    for(let y=0;y<rows;y++){
      for(let x=0;x<cols;x++){
        const n = neighbors(grid, x, y);
        const alive = grid[y][x] === 1;
        next[y][x] = alive ? (n===2||n===3 ? 1 : 0) : (n===3 ? 1 : 0);
      }
    }
    grid = next;
  }

  function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for(let y=0;y<rows;y++){
      for(let x=0;x<cols;x++){
        if(grid[y][x]===1){
          ctx.fillStyle = 'rgba(31, 111, 107, 0.16)';
          ctx.fillRect(x*CELL, y*CELL, CELL-2, CELL-2);
        }
      }
    }
  }

  resize();
  draw();
  window.addEventListener('resize', resize);

  canvas.addEventListener('click', (e)=>{
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / CELL);
    const y = Math.floor((e.clientY - rect.top) / CELL);
    for(let dy=-1; dy<=1; dy++){
      for(let dx=-1; dx<=1; dx++){
        const ny=(y+dy+rows)%rows, nx=(x+dx+cols)%cols;
        grid[ny][nx] = 1;
      }
    }
    draw();
  });

  if(!reduceMotion){
    setInterval(()=>{ step(); draw(); }, 180);
  }
})();
