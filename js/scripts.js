        // function to set a given theme/color-scheme
        function setTheme(themeName) {
            localStorage.setItem('theme', themeName);
            document.documentElement.className = themeName;
        }

        // function to toggle between light and dark theme
        function toggleTheme() {
            if (localStorage.getItem('theme') === 'light-mode') {
                setTheme('dark-mode');
            } else {
                setTheme('light-mode');
            }
        }

        // Immediately invoked function to set the theme on initial load
        (function () {
            if (localStorage.getItem('theme') === 'light-mode') {
                setTheme('light-mode');
            } else {
                setTheme('dark-mode');
            }
        })();