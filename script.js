async function fetchPostData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();

        // Calculate total number of posts
        const totalPosts = posts.length;

        // Calculate average length of post titles
        const avgTitleLength = posts.reduce((sum, post) => sum + post.title.length, 0) / totalPosts;

        // Calculate number of posts by user ID 1
        const userPosts = posts.filter(post => post.userId === 1).length;

        // Display the results
        document.getElementById('totalPosts').textContent = totalPosts;
        document.getElementById('avgTitleLength').textContent = avgTitleLength.toFixed(2);
        document.getElementById('userPosts').textContent = userPosts;

    } catch (error) {
        console.error('Error fetching post data:', error);
    }
}

fetchPostData();