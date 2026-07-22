<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Debounce Demo</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 30px;
        }

        input {
            width: 300px;
            padding: 10px;
            font-size: 16px;
        }
    </style>
</head>
<body>

    <h2>Debounce Search Demo</h2>

    <input
        type="text"
        id="search"
        placeholder="Type something..."
    />

    <script>
        function debounce(func, wait, immediate = false) {
            let timeout;

            return function (...args) {
                const context = this;

                // Cancel previous timer
                clearTimeout(timeout);

                // Immediate execution option
                if (immediate && !timeout) {
                    func.apply(context, args);
                }

                timeout = setTimeout(() => {
                    timeout = null;

                    if (!immediate) {
                        func.apply(context, args);
                    }
                }, wait);
            };
        }

        const onSearch = debounce((e) => {
            console.log("Searching for:", e.target.value);
        }, 1000);

        document
            .getElementById("search")
            .addEventListener("input", onSearch);
    </script>

</body>
</html>
