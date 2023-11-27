// pages/[category]/[id].js

import { useRouter } from 'next/router';

const DynamicPage = () => {
  const router = useRouter();
  const { category, id } = router.query;

  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>Category: {category}</p>
      <p>ID: {id}</p>
    </div>
  );
};

export default DynamicPage;

