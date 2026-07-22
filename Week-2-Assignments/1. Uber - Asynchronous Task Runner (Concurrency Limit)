<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Promise Concurrency Limit</title>
</head>
<body>

    <h2>Promise.all With Concurrency Limit</h2>
    <button id="start">Start Tasks</button>

    <script>
        /**
         * Runs promise-returning tasks with a concurrency limit.
         * @param {Array<() => Promise<any>>} tasks
         * @param {number} limit
         */
        async function promiseAllWithConcurrencyLimit(tasks, limit) {

            const results = new Array(tasks.length);
            let nextIndex = 0;

            async function worker() {

                // No more tasks left
                if (nextIndex >= tasks.length) {
                    return;
                }

                // Take the next available task
                const current = nextIndex;
                nextIndex++;

                console.log(`🟢 Worker started Task ${current + 1}`);

                const result = await tasks[current]();

                results[current] = result;

                console.log(`✅ Worker finished Task ${current + 1}`);

                // Continue with the next task
                return worker();
            }

            const workers = [];

            // Start only "limit" workers
            for (let i = 0; i < Math.min(limit, tasks.length); i++) {
                workers.push(worker());
            }

            await Promise.all(workers);

            return results;
        }

        // Creates a fake API request
        function createDriverTask(id, delay) {
            return () => {
                return new Promise((resolve) => {

                    console.log(`🚗 Fetching Driver ${id}...`);

                    setTimeout(() => {

                        console.log(`✔ Driver ${id} loaded`);

                        resolve(`Driver ${id} Data`);

                    }, delay);

                });
            };
        }

        const tasks = [
            createDriverTask(1, 3000),
            createDriverTask(2, 1000),
            createDriverTask(3, 2000),
            createDriverTask(4, 1500),
            createDriverTask(5, 2500),
            createDriverTask(6, 1200)
        ];

        document.getElementById("start").addEventListener("click", async () => {

            console.clear();

            console.log("===== START =====");

            const result = await promiseAllWithConcurrencyLimit(tasks, 2);

            console.log("===== ALL TASKS COMPLETED =====");
            console.log(result);

        });

    </script>

</body>
</html>
