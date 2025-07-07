interface Article {
    title: string;
    content: string;
}
const articles: Article[] = Array.from({length: 15}, (_, i) => ({
    title: `Article ${i + 1}`,
    content: `This is the content of article ${i + 1}.`
}));

const container = document.getElementById('container');
const loadingIndicator = document.getElementById('loading');

let currentIndex: number = 0;
let articlePerPage: number = 5;
let loading: boolean = false;

function loadArticles() {
    if(currentIndex >= articles.length) return;

    const end = Math.min(currentIndex + articlePerPage, articles.length);
    for(let i = currentIndex; i < end; i++){
        const newElement = document.createElement('div');
        newElement.className = 'article';
        newElement.innerHTML = `
        <h3>${articles[i].title}</h3>
        <p>${articles[i].content}</p>
        `;
        container?.appendChild(newElement);
    }
    currentIndex = end;
    if(currentIndex >= articles.length){
        loadingIndicator!.style.display = 'none'
        window.removeEventListener('scroll', handleScroll);
    }
}

function handleScroll() {
    if(loading) return;
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;
    if(scrollTop + viewportHeight >= totalHeight - 50){
        loading = true;
        loadingIndicator!.style.display = 'block';
        setTimeout(() => {
            loadArticles();
            loading = false;
            if(currentIndex < articles.length){
                loadingIndicator!.style.display = 'none';
            }
        }, 500);
    }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('DOMContentLoaded', () => {
    loadArticles();
});