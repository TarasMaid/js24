async function fetchUserDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await response.json();
    const userDetails = document.getElementById('userDetails');

    userDetails.innerHTML = `
                <p>ID: ${user.id}</p>
                <p>Name: ${user.name}</p>
                <p>Username: ${user.username}</p>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
                <p>Website: ${user.website}</p>
                <p>Company: ${user.company.name}</p>
                <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            `;

    document.getElementById('loadPostsButton').addEventListener('click', fetchUserPosts);
}

async function fetchUserPosts() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const posts = await response.json();
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postBlock = document.createElement('div');
        postBlock.className = 'post-block';
        postBlock.innerHTML = `
                    <p>Title: ${post.title}</p>
                    <a href="post-details.html?postId=${post.id}">View Post Details</a>
                `;
        postsContainer.appendChild(postBlock);
    });
}

fetchUserDetails();