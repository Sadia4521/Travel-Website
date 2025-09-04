const sections = document.querySelectorAll('.fade-in');
const options = {
    threshold: 0.2
};
const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
        const texts = entry.target.querySelectorAll('.fade-text');
        texts.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('show');
        }, index * 200);
        });
        observer.unobserve(entry.target);
    }
    });
}, options);
sections.forEach(section => {
    observer.observe(section);
});