
document.addEventListener('DOMContentLoaded', (event) => {
    const tracks = document.querySelectorAll('.js9');
    const trackArray = Array.from(tracks).map(track => {
        return {
            title: track.querySelector('.title').textContent,
            author: track.querySelector('.author').textContent,
            mp3: track.querySelector('.mp3').href
        };
    });

    console.log(trackArray);

    trackArray.forEach(track => {
        const trackDiv = document.createElement('div');
        trackDiv.className = 'track';

        const titleDiv = document.createElement('div');
        titleDiv.className = 'title';
        titleDiv.textContent = track.title;

        const authorDiv = document.createElement('div');
        authorDiv.className = 'author';
        authorDiv.textContent = track.author;

        const audioElement = document.createElement('audio');
        audioElement.controls = true;
        audioElement.src = track.mp3;

        trackDiv.appendChild(titleDiv);
        trackDiv.appendChild(authorDiv);
        trackDiv.appendChild(audioElement);

        document.body.appendChild(trackDiv);
    });
});