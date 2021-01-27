// write a function to retrieve a blob of json
// make an ajax request! Use the 'fetch' function.

// https://jsonplaceholder.typicode.com/comments

// function fetchComments () {
//     fetch('https://jsonplaceholder.typicode.com/comments')
//         .then(res => res.json())
//         .then(json => console.log(json));
// }

fetchComments = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const json = await res.json()
    
    console.log(json);
}

fetchComments();