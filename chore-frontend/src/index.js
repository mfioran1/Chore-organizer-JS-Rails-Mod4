console.log('testing')

const BACKEND_URL = 'http://localhost:3000';
fetch(`${BACKEND_URL}/test`)
.then(res => res.json())
.then(parse => console.log(parse))