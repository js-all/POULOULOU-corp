function call() {
    const SCRIPTS = document.getElementById('script');
    const t = [
        'cssVar',
        'main'
    ]
    for (let i of t) {
        document.createEl('script',{src: 'scripts/'+i+'.js'},SCRIPTS);
    }
}