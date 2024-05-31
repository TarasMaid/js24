async function fetchPostDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('postId');
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await response.json();
    const postDetails = document.getElementById('postDetails');

    postDetails.innerHTML = `
                <p>ID: ${post.id}</p>
                <p>Title: ${post.title}</p>
                <p>Body: ${post.body}</p>
            `;

    fetchPostComments(postId);
}

async function fetchPostComments(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const comments = await response.json();
    const commentsContainer = document.getElementById('commentsContainer');
    commentsContainer.innerHTML = '';

    comments.forEach(comment => {
        const commentBlock = document.createElement('div');
        commentBlock.className = 'comment-block';
        commentBlock.innerHTML = `
                    <p>Name: ${comment.name}</p>
                    <p>Email: ${comment.email}</p>
                    <p>Body: ${comment.body}</p>
                `;
        commentsContainer.appendChild(commentBlock);
    });
}

fetchPostDetails();