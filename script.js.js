(function () {
  const ACTIVITIES = [
    {
      id: 1,
      title: "Human Robot Grid Navigation",
      ctPillar: "Algorithmic Thinking",
      pillarClass: "pill-ct-algo",
      gradeBand: "K-2",
      duration: "35–45 mins",
      materials: "Floor masking tape grid (5x5), directional arrow cards (Move Forward, Turn Left, Turn Right), paper obstacle cones.",
      summary:
        "Students pair up as 'Programmers' and 'Robots' to design step-by-step physical movement sequences across a classroom grid without touching a screen.",
      theory: {
        name: "Sociocultural Theory & Zone of Proximal Development (ZPD)",
        theorists: "Lev Vygotsky (1978)",
        coreIdeas:
          "Cognitive development is socially mediated through dialogue and peer collaboration. Guided scaffolding enables young learners to solve multi-step spatial problems beyond their independent reach."
      },
      prompts: [
        "Before your robot takes a step, explain out loud to your partner why you ordered your arrow cards this way.",
        "Your robot bumped into an obstacle on step 3—which single card can you swap together to debug the route?",
        "How did talking through the path with your partner help you catch a wrong turn before moving?"
      ]
    },
    {
      id: 2,
      title: "Paper Prototype Board Game Design",
      ctPillar: "Decomposition",
      pillarClass: "pill-ct-decomp",
      gradeBand: "3-5",
      duration: "50–60 mins",
      materials: "Cardstock boards, markers, dice, index cards for rule logic, counters or tokens.",
      summary:
        "Students decompose the complex challenge of inventing a playable board game into modular subsystems: board topology, movement mechanics, scoring, and win conditions.",
      theory: {
        name: "Constructionism",
        theorists: "Seymour Papert (1980)",
        coreIdeas:
          "Learners build deep mental structures most effectively when constructing tangible, shareable artifacts ('objects-to-think-with') and testing their ideas in the physical world."
      },
      prompts: [
        "Break your game down into four separate parts on index cards before drawing a single line on your board.",
        "Watch another group play your prototype without interrupting—where do players get confused by your rules?",
        "What rule did you have to rewrite after seeing peers test your physical game artifact?"
      ]
    },
    {
      id: 3,
      title: "Binary Bead & Bracelet Encoding",
      ctPillar: "Abstraction",
      pillarClass: "pill-ct-abstract",
      gradeBand: "3-5",
      duration: "40 mins",
      materials: "Two contrasting colors of pony beads, pipe cleaners or cord, 8-bit ASCII binary reference sheet.",
      summary:
        "Students abstract alphabetic characters into binary sequences (0s and 1s) by threading two colors of beads to encode their initials.",
      theory: {
        name: "Cognitive Development (Concrete Operational Stage)",
        theorists: "Jean Piaget (1952)",
        coreIdeas:
          "Elementary students master abstract symbolic representations best when anchored to concrete physical manipulatives they can classify, sequence, and inspect."
      },
      prompts: [
        "If we only have two colors of beads, how can we represent all 26 letters of the alphabet?",
        "Why doesn't a computer care whether the beads are blue and yellow or black and white?",
        "Swap bracelets with a partner and decode their hidden initial using the 8-bit ASCII chart."
      ]
    },
    {
      id: 4,
      title: "Parallel Sorting Network Floor Challenge",
      ctPillar: "Algorithmic Thinking",
      pillarClass: "pill-ct-algo",
      gradeBand: "6-8",
      duration: "45 mins",
      materials: "Painter's tape or sidewalk chalk for a 6-node comparator network, numbered cards (1–6 or fractions).",
      summary:
        "Six students walk simultaneously through a floor comparator network, comparing values at each node and branching left or right until the entire group emerges sorted.",
      theory: {
        name: "Experiential Learning Cycle",
        theorists: "David Kolb (1984)",
        coreIdeas:
          "Deep conceptual understanding emerges through a four-stage cycle: Concrete Experience, Reflective Observation, Abstract Conceptualization, and Active Experimentation."
      },
      prompts: [
        "Reflective Observation: What exact comparison rule did you follow every time you met a classmate inside a node?",
        "Abstract Conceptualization: Why did everyone arrive in exact numerical order even though no single person saw all six numbers at once?",
        "Active Experimentation: Scramble the starting order and run the network again—does the same algorithm guarantee a sorted output?"
      ]
    },
    {
      id: 5,
      title: "Song Lyrics Compression & Loop Hunt",
      ctPillar: "Pattern Recognition",
      pillarClass: "pill-ct-pattern",
      gradeBand: "3-5",
      duration: "35 mins",
      materials: "Printed lyrics of repetitive songs or poems, colored highlighters, scissors, tape.",
      summary:
        "Students identify recurring verses and choruses in printed lyrics, replacing duplicated blocks with 'Repeat N times' loop pointers to compress text length.",
      theory: {
        name: "Cognitive Load Theory & Multimedia Learning",
        theorists: "John Sweller (1988) & Richard Mayer (2001)",
        coreIdeas:
          "Human working memory has strict capacity limits; chunking repeating patterns and using visual signaling reduces extraneous load and builds structural schemas."
      },
      prompts: [
        "Highlight every repeated chorus in the same color—how many lines of text can you eliminate using a Repeat block?",
        "If a verse repeats 4 times, how much shorter is your compressed lyric sheet compared to the original?",
        "Where else in mathematics or music do we use symbols to avoid writing the exact same steps repeatedly?"
      ]
    },
    {
      id: 6,
      title: "Literal Machine Sandwich Debugging",
      ctPillar: "Debugging & Logic",
      pillarClass: "pill-ct-debug",
      gradeBand: "K-2",
      duration: "35–40 mins",
      materials: "Sliced bread, sunbutter/jam, plastic spreader, paper plates, chart paper.",
      summary:
        "Students author step-by-step sandwich-making instructions while the teacher executes them with hyper-literal precision to expose hidden assumptions and logic bugs.",
      theory: {
        name: "Discovery Learning & Instructional Scaffolding",
        theorists: "Jerome Bruner (1961)",
        coreIdeas:
          "Learners construct durable conceptual knowledge when guided discovery creates productive cognitive dissonance, prompting them to test and refine hypotheses."
      },
      prompts: [
        "If your instruction says 'put jam on bread' without mentioning the lid, what will a literal robot do?",
        "Look at where the step failed—what exact action verb and tool do we need to add to fix the bug?",
        "Why do computers require explicit, unambiguous instructions while human friends can guess what you mean?"
      ]
    },
    {
      id: 7,
      title: "20 Questions & Logarithmic Binary Search",
      ctPillar: "Algorithmic Thinking",
      pillarClass: "pill-ct-algo",
      gradeBand: "6-8",
      duration: "40 mins",
      materials: "Numbered cards (1–100) or sorted dictionary pages, sticky notes.",
      summary:
        "Students benchmark sequential guessing against halving a sorted search space each turn, discovering why binary search finds any target in at most 7 steps.",
      theory: {
        name: "Information Processing Theory",
        theorists: "George Miller (1956) & Atkinson / Shiffrin (1968)",
        coreIdeas:
          "Efficient problem solving relies on structured encoding strategies and decision trees that systematically partition information."
      },
      prompts: [
        "If I secretly pick a number from 1 to 100, why is guessing 50 first dramatically smarter than guessing 1?",
        "What is the maximum number of guesses needed to locate any number between 1 and 100 if you eliminate half the list every turn?",
        "Why must the cards be sorted in order before a binary search algorithm can work?"
      ]
    },
    {
      id: 8,
      title: "Transit Map & Graph Theory Abstraction",
      ctPillar: "Abstraction",
      pillarClass: "pill-ct-abstract",
      gradeBand: "9-12",
      duration: "50 mins",
      materials: "Local city street map, colored yarn, index cards for stations, markers.",
      summary:
        "Students strip away geographic clutter (exact road curves, scale distances, buildings) from a city street map to construct a topological node-and-edge transit diagram.",
      theory: {
        name: "Situated Learning & Communities of Practice",
        theorists: "Jean Lave & Etienne Wenger (1991)",
        coreIdeas:
          "Meaningful learning occurs when students engage in authentic disciplinary modeling practices—such as urban transit network design—within a collaborative community."
      },
      prompts: [
        "Which geographic details from the street map did you intentionally discard so commuters can navigate faster?",
        "In graph theory terms, what do the index cards represent (nodes) and what do the colored yarn lines represent (edges)?",
        "When would a traveler need the detailed geographic map instead of your abstracted transit graph?"
      ]
    },
    {
      id: 9,
      title: "Conditional Logic Card Game ('If–Else' Uno)",
      ctPillar: "Debugging & Logic",
      pillarClass: "pill-ct-debug",
      gradeBand: "6-8",
      duration: "45 mins",
      materials: "Standard playing card decks, dry-erase rule boards with nested IF / ELSE-IF / ELSE statements.",
      summary:
        "Students play and debug a tabletop card game governed by Boolean operators and nested conditional branches (e.g., 'IF red AND even THEN reverse; ELSE IF...').",
      theory: {
        name: "Social Cognitive Theory & Self-Efficacy",
        theorists: "Albert Bandura (1986)",
        coreIdeas:
          "Observing peers articulate logical rules, receiving immediate feedback, and mastering progressively complex rule sets builds learners' analytical self-efficacy."
      },
      prompts: [
        "Trace the rule board from top to bottom—why does swapping the order of IF and ELSE-IF change who wins the hand?",
        "Can you find a card in the deck that satisfies none of our rules? Write a catch-all ELSE statement to handle that edge case.",
        "State your play aloud using the exact keywords IF, THEN, and ELSE so your group can verify your logic."
      ]
    },
    {
      id: 10,
      title: "Pixel Art Run-Length Encoding (RLE)",
      ctPillar: "Pattern Recognition",
      pillarClass: "pill-ct-pattern",
      gradeBand: "9-12",
      duration: "45–55 mins",
      materials: "10x10 graph paper grids, colored pencils, numeric RLE code worksheets.",
      summary:
        "Students compress monochrome or multi-color pixel art into numeric run-length strings (e.g., '3W, 4B, 3W') and reconstruct a partner's image purely from data.",
      theory: {
        name: "Universal Design for Learning (UDL)",
        theorists: "David Rose & Anne Meyer / CAST (2002)",
        coreIdeas:
          "Providing multiple means of representation (spatial visual grid + numeric sequence) and multiple means of expression lowers barriers for diverse learners."
      },
      prompts: [
        "How does Run-Length Encoding transform a two-dimensional picture into a one-dimensional stream of numbers?",
        "Compare a dense checkerboard pattern with a wide horizontal stripe—which grid compresses into fewer numbers and why?",
        "Without showing your drawing, read your RLE code to a partner—where did any pixel discrepancy occur and how can you debug it?"
      ]
    }
  ];

  // Application State
  let savedIds = [];
  try {
    const stored = localStorage.getItem("ct_saved_lessons");
    if (stored) savedIds = JSON.parse(stored);
  } catch (e) {
    savedIds = [];
  }

  let activePillar = "all";

  // DOM References
  const container = document.getElementById("activitiesContainer");
  const visibleCountEl = document.getElementById("visibleCount");
  const savedCountEl = document.getElementById("savedCount");
  const searchInput = document.getElementById("searchInput");
  const gradeFilter = document.getElementById("gradeFilter");
  const viewModeSelect = document.getElementById("viewMode");
  const resetBtn = document.getElementById("resetBtn");
  const pillarChips = document.querySelectorAll(".pillar-chip");

  // Modal & Drawer References
  const lessonModal = document.getElementById("lessonModal");
  const modalOverlay = document.getElementById("modalOverlay");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modalBadges = document.getElementById("modalBadges");
  const modalContent = document.getElementById("modalContent");

  const savedDrawer = document.getElementById("savedDrawer");
  const drawerOverlay = document.getElementById("drawerOverlay");
  const openSavedBtn = document.getElementById("openSavedBtn");
  const closeDrawerBtn = document.getElementById("closeDrawerBtn");
  const savedListEl = document.getElementById("savedList");
  const copyAllSavedBtn = document.getElementById("copyAllSavedBtn");
  const clearSavedBtn = document.getElementById("clearSavedBtn");

  function persistSaved() {
    savedCountEl.textContent = savedIds.length;
    try {
      localStorage.setItem("ct_saved_lessons", JSON.stringify(savedIds));
    } catch (e) {
      // Ignore storage errors in sandboxed iframes
    }
  }

  function renderCards(items) {
    visibleCountEl.textContent = items.length;

    if (!items.length) {
      container.innerHTML = `
        <div class="empty-state">
          <h3>No matching unplugged activities found</h3>
          <p style="margin-top:0.4rem;">Try clearing your search terms or selecting "All Pillars" and "All Grades".</p>
        </div>
      `;
      return;
    }

    container.innerHTML = items
      .map((act) => {
        const isSaved = savedIds.includes(act.id);
        return `
          <article class="activity-card">
            <div>
              <div class="card-header-row">
                <div class="badge-group">
                  <span class="pill ${act.pillarClass}">${act.ctPillar}</span>
                  <span class="pill pill-grade">Grades ${act.gradeBand}</span>
                </div>
                <button
                  type="button"
                  class="bookmark-btn ${isSaved ? "saved" : ""}"
                  data-action="bookmark"
                  data-id="${act.id}"
                  aria-pressed="${isSaved}"
                >
                  ${isSaved ? "★ Saved" : "☆ Save"}
                </button>
              </div>

              <h2 class="activity-title">${act.id}. ${act.title}</h2>
              <p class="activity-summary">${act.summary}</p>

              <div class="theory-panel">
                <div class="theory-label">Educational Learning Theory</div>
                <div class="theory-title">${act.theory.name}</div>
                <div class="theory-theorist">Main Theorist(s): ${act.theory.theorists}</div>
                <p class="theory-ideas">${act.theory.coreIdeas}</p>
              </div>

              <div class="prompts-panel">
                <h4>K–12 Teacher Classroom Prompts</h4>
                <ul>
                  ${act.prompts.map((p) => `<li>${p}</li>`).join("")}
                </ul>
              </div>
            </div>

            <div class="card-actions">
              <button type="button" class="btn-primary" data-action="details" data-id="${act.id}">
                Materials &amp; Full Lesson View
              </button>
              <button type="button" class="btn-copy-quick" data-action="copy" data-id="${act.id}">
                Copy Prompts
              </button>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    const grade = gradeFilter.value;

    const filtered = ACTIVITIES.filter((act) => {
      const matchPillar = activePillar === "all" || act.ctPillar === activePillar;
      const matchGrade = grade === "all" || act.gradeBand === grade;

      const haystack = [
        act.title,
        act.ctPillar,
        act.gradeBand,
        act.summary,
        act.theory.name,
        act.theory.theorists,
        act.theory.coreIdeas,
        ...act.prompts
      ]
        .join(" ")
        .toLowerCase();

      const matchQuery = !query || haystack.includes(query);
      return matchPillar && matchGrade && matchQuery;
    });

    renderCards(filtered);
  }

  function copyTextToClipboard(text, buttonEl) {
    const originalText = buttonEl.textContent;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        buttonEl.textContent = "✓ Copied!";
        setTimeout(() => (buttonEl.textContent = originalText), 1800);
      });
    } else {
      const temp = document.createElement("textarea");
      temp.value = text;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
      buttonEl.textContent = "✓ Copied!";
      setTimeout(() => (buttonEl.textContent = originalText), 1800);
    }
  }

  function openLessonModal(id) {
    const act = ACTIVITIES.find((item) => item.id === id);
    if (!act) return;

    modalBadges.innerHTML = `
      <span class="pill ${act.pillarClass}">${act.ctPillar}</span>
      <span class="pill pill-grade">Grades ${act.gradeBand} • ${act.duration}</span>
    `;

    modalContent.innerHTML = `
      <h2 id="modalHeading" style="font-size:1.5rem; margin-bottom:0.5rem;">${act.id}. ${act.title}</h2>
      <p style="color:var(--text-secondary);">${act.summary}</p>

      <div class="modal-block">
        <h3>Unplugged Classroom Materials</h3>
        <p>${act.materials}</p>
      </div>

      <div class="modal-block">
        <h3>Learning Theory &amp; Pedagogical Grounding</h3>
        <p><strong>Theory:</strong> ${act.theory.name}</p>
        <p><strong>Main Theorist(s):</strong> ${act.theory.theorists}</p>
        <p style="margin-top:0.35rem;"><strong>Core Ideas:</strong> ${act.theory.coreIdeas}</p>
      </div>

      <div class="modal-block">
        <h3>K–12 Teacher Discussion &amp; Scaffolding Prompts</h3>
        <ol class="modal-prompts">
          ${act.prompts.map((p) => `<li>${p}</li>`).join("")}
        </ol>
      </div>

      <div style="margin-top:1.5rem; display:flex; gap:0.75rem;">
        <button type="button" id="modalCopyBtn" class="btn-primary">Copy Teacher Prompts</button>
      </div>
    `;

    lessonModal.hidden = false;
    closeModalBtn.focus();

    document.getElementById("modalCopyBtn").addEventListener("click", function () {
      const formatted = `${act.title} (Grades ${act.gradeBand} | ${act.theory.name} - ${act.theory.theorists})\n` +
        act.prompts.map((p, i) => `${i + 1}. ${p}`).join("\n");
      copyTextToClipboard(formatted, this);
    });
  }

  function renderSavedDrawer() {
    if (!savedIds.length) {
      savedListEl.innerHTML = `<p style="color:var(--text-secondary); font-size:0.92rem;">No activities saved yet. Click "☆ Save" on any activity card to add it to your lesson plan.</p>`;
      return;
    }

    const savedItems = ACTIVITIES.filter((a) => savedIds.includes(a.id));
    savedListEl.innerHTML = savedItems
      .map(
        (act) => `
        <div class="saved-item">
          <div>
            <div style="font-weight:700; font-size:0.95rem;">${act.id}. ${act.title}</div>
            <div style="font-size:0.8rem; color:var(--text-secondary);">Grades ${act.gradeBand} • ${act.theory.theorists}</div>
          </div>
          <button type="button" class="btn-outline" data-remove-id="${act.id}" style="padding:0.35rem 0.65rem; font-size:0.8rem;">Remove</button>
        </div>
      `
      )
      .join("");
  }

  // Event Listeners
  pillarChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      pillarChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      activePillar = chip.dataset.pillar;
      applyFilters();
    });
  });

  searchInput.addEventListener("input", applyFilters);
  gradeFilter.addEventListener("change", applyFilters);

  viewModeSelect.addEventListener("change", () => {
    if (viewModeSelect.value === "compact") {
      container.classList.add("compact-mode");
    } else {
      container.classList.remove("compact-mode");
    }
  });

  resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    gradeFilter.value = "all";
    activePillar = "all";
    pillarChips.forEach((c) => c.classList.toggle("active", c.dataset.pillar === "all"));
    applyFilters();
  });

  container.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;

    const id = Number(btn.dataset.id);
    const action = btn.dataset.action;

    if (action === "details") {
      openLessonModal(id);
    } else if (action === "copy") {
      const act = ACTIVITIES.find((item) => item.id === id);
      if (act) {
        const text = `${act.title} (${act.theory.name} - ${act.theory.theorists}):\n` +
          act.prompts.map((p, idx) => `${idx + 1}. ${p}`).join("\n");
        copyTextToClipboard(text, btn);
      }
    } else if (action === "bookmark") {
      if (savedIds.includes(id)) {
        savedIds = savedIds.filter((item) => item !== id);
      } else {
        savedIds.push(id);
      }
      persistSaved();
      applyFilters();
    }
  });

  closeModalBtn.addEventListener("click", () => (lessonModal.hidden = true));
  modalOverlay.addEventListener("click", () => (lessonModal.hidden = true));

  openSavedBtn.addEventListener("click", () => {
    renderSavedDrawer();
    savedDrawer.hidden = false;
  });

  closeDrawerBtn.addEventListener("click", () => (savedDrawer.hidden = true));
  drawerOverlay.addEventListener("click", () => (savedDrawer.hidden = true));

  savedListEl.addEventListener("click", (e) => {
    const removeBtn = e.target.closest("button[data-remove-id]");
    if (!removeBtn) return;
    const id = Number(removeBtn.dataset.removeId);
    savedIds = savedIds.filter((item) => item !== id);
    persistSaved();
    renderSavedDrawer();
    applyFilters();
  });

  copyAllSavedBtn.addEventListener("click", function () {
    const savedItems = ACTIVITIES.filter((a) => savedIds.includes(a.id));
    if (!savedItems.length) return;
    const bundle = savedItems
      .map(
        (act) =>
          `=== ${act.id}. ${act.title} (Grades ${act.gradeBand}) ===\nTheory: ${act.theory.name} (${act.theory.theorists})\nPrompts:\n` +
          act.prompts.map((p, i) => `  ${i + 1}. ${p}`).join("\n")
      )
      .join("\n\n");
    copyTextToClipboard(bundle, this);
  });

  clearSavedBtn.addEventListener("click", () => {
    savedIds = [];
    persistSaved();
    renderSavedDrawer();
    applyFilters();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lessonModal.hidden = true;
      savedDrawer.hidden = true;
    }
  });

  // Initialize immediately
  persistSaved();
  renderCards(ACTIVITIES);
})();