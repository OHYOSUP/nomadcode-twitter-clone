
import {useRouter} from 'next/router';
export default function About(){
  const router = useRouter();
  const id = Number(router.query.id);
  return <>
  <h1>/pages/sub/[id]</h1>
  <p>parameter id : {id}</p>
  <a href="/">/pages/index.js</a>
  </>
}