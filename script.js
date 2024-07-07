document.addEventListener("DOMContentLoaded", function() {
    const canvasElements = document.getElementsByClassName('canvas');
    for (let i = 0; i < canvasElements.length; i++) {
        const canvas = canvasElements[i];
        const ctx = canvas.getContext('2d');

        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        let drawing = false;

        function startDrawing(event) {
            event.preventDefault();
            drawing = true;
            ctx.beginPath();
            draw(event);
        }

        function endDrawing() {
            drawing = false;
            ctx.beginPath();
        }

        function draw(event) {
            if (!drawing) return;

            event.preventDefault();
            let x, y;
            if (event.touches) {
                x = event.touches[0].clientX - canvas.getBoundingClientRect().left;
                y = event.touches[0].clientY - canvas.getBoundingClientRect().top;
            } else {
                x = event.clientX - canvas.getBoundingClientRect().left;
                y = event.clientY - canvas.getBoundingClientRect().top;
            }

            ctx.lineWidth = 5;
            ctx.lineCap = 'round';

            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, 'red');
            gradient.addColorStop(0.25, 'orange');
            gradient.addColorStop(0.5, 'yellow');
            gradient.addColorStop(0.75, 'green');
            gradient.addColorStop(1, 'blue');
            ctx.strokeStyle = gradient;

            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x, y);
        }

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mouseup', endDrawing);
        canvas.addEventListener('mousemove', draw);

        canvas.addEventListener('touchstart', startDrawing);
        canvas.addEventListener('touchend', endDrawing);
        canvas.addEventListener('touchmove', draw);

        canvas.addEventListener('touchstart', (e) => e.preventDefault());
        canvas.addEventListener('touchmove', (e) => e.preventDefault());

        window.addEventListener('resize', () => {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
        });
    }
});
