import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLazyGetAllBlogQuery } from '../../../app/service/blogService'
import { useGetTopCategoryQuery } from '../../../app/service/categoryService';

function HomePage() {
  const [getAllBlog, result, isLoading] = useLazyGetAllBlogQuery();
  const { data } = useGetTopCategoryQuery();

  useEffect(() => {
    getAllBlog({ page: 1, pageSize: 5 });
  }, [])

  if (isLoading) (
    <h2>Loading.....</h2>
  )
  const prePage = () => {
    getAllBlog({ page: result.originalArgs.page - 1, pageSize: 5 });
  }
  const nextPage = () => {
    getAllBlog({ page: result.originalArgs.page + 1, pageSize: 5 });
  }

  console.log(data)
  return (
    <main className="main">
      <header className="entry-header">
        <h1>
          <span>🐈</span>
          Blog app <span>🐈</span>
        </h1>
      </header>
      <ul className="terms-tags top-tags">
        {data?.content?.map(e => (
          <li>
            <Link to={`/categories/${e.name}`}>{e.name}
              <sup>
                <strong>
                  <sup>{e.used}</sup>
                </strong>
              </sup>
            </Link>
          </li>
        ))}
      </ul>
      {result?.data?.content.map((b) => (
        <article className="post-entry" key={b.id}>
          <header className="entry-header">
            <h2>
              {b.title}
            </h2>
          </header>
          <div className="entry-content">
            <p>
              {b.description}
            </p>
          </div>
          <footer className="entry-footer">
            <span>{b.createdAt}</span>
          </footer>
          <Link className="entry-link" to={`/blogs/${b.id}/${b.slug}`}></Link>
        </article>
      ))}
      <footer className="page-footer"><nav className="pagination">
        {!result?.data?.first &&
          <button className="prev" onClick={prePage}>« Trang trước</button>
        }
        {
          !result?.data?.last &&
          <button className="next" onClick={nextPage}>Trang tiếp theo »</button>
        }
      </nav>
      </footer>
    </main>
  )
}

export default HomePage