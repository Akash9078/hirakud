document.addEventListener('DOMContentLoaded', () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id);
        if (!obj) return; // Prevent error if element does not exist
        let current = start;
        let range = end - start;
        let increment = end > start ? 1 : -1;
        let step = Math.abs(Math.floor(duration / range));
        let timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, step);
    }

    counter("count1", 0, 100, 2000);
    counter("count2", 0, 200, 2500);
    counter("count3", 0, 300, 3000);
    counter("count4", 0, 400, 3500);
});
