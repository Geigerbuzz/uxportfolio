function changeColorScheme(newColorScheme) {
    localStorage.colorScheme = newColorScheme;
  
    document.body.dataset.theme = newColorScheme;
    return;
  }
  
  function toggleColorScheme() {
    const newColorScheme = localStorage.colorScheme === 'dark' ? 'light' : 'dark';
    return changeColorScheme(newColorScheme);
  }
  
  const themeToggle = document.getElementById('theme-toggle');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
      toggleColorScheme();
    });
  }
  
  if (localStorage.colorScheme) {
    document.body.dataset.theme = localStorage.colorScheme;
  } else if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    changeColorScheme('dark');
  }
  
  // Listen for changes to the users preferences
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      const newColorScheme = e.matches ? 'dark' : 'light';
      changeColorScheme(newColorScheme);
    });

    const subtitle = document.getElementsByClassName("card-subtitle")[0];

    const createWord = (text, index) => {
      const word = document.createElement("span");
      
      word.innerHTML = `${text} `;
      
      word.classList.add("card-subtitle-word");
      
      word.style.transitionDelay = `${index * 40}ms`;
      
      return word;
    }
    
    const addWord = (text, index) => subtitle.appendChild(createWord(text, index));
    
    const createSubtitle = text => text.split(" ").map(addWord);
    
    createSubtitle("Just kidding! After having a good look around here you should know exactly what you're gonna get! =]");


    document.querySelectorAll("#music-table tbody tr").forEach(row => {
      row.addEventListener("click", () => {
        const href = row.getAttribute("data-href");
        if (href) {
          window.open(href, "_blank");
        }
      });
    });
    