const root = document.getElementById('root') as HTMLElement;
root.innerHTML = 'hello again';
import axios from 'axios';

const testFetch = async () => {
  const { data } = await axios.get('http://localhost:1956');

  console.log(data);
};

const foo = testFetch();
