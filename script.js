document.getElementById('versionSlider').addEventListener('input', function() {
    const version = this.value;
    document.getElementById('versionDisplay').textContent = `Version ${version}`;
    updateContent(version);
});

function updateContent(version) {
    const content = document.getElementById('content');
    // Example content for different versions
    const versions = {
        1: 'Content for version 1',
        2: 'Content for version 2',
        3: 'Content for version 3',
        4: 'Content for version 4',
        5: 'Content for version 5',
        6: 'Content for version 6',
        7: 'Content for version 7',
        8: 'Content for version 8',
        9: 'Content for version 9',
        10: 'Content for version 10'
    };
    content.textContent = versions[version];
}