const USERS_URL = "https://jsonplaceholder.typicode.com/posts";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function getUsers(): void {
  fetch(USERS_URL, { method: "GET" })
    .then((res) => {
      return res.json();
    })
    .then((data: Post[]) => {
      console.log(data);
      const postIds = data.map((post) => {
        return post.id;
      });

	  console.log({postIds});
	  
    })
    .catch((err) => console.log(`Error: ${err}`));
}

getUsers();
