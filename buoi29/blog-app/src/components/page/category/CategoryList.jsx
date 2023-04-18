import React from 'react'
import { Link } from 'react-router-dom'
import { useGetAllCategoryQuery } from '../../../app/service/categoryService'

function CategoryList() {
  const {data, isLoading} = useGetAllCategoryQuery();

  if (isLoading) (
    <h2>Loading.....</h2>
  )

  return (
    <main className="main">
      <header className="page-header">
        <h1>List Category</h1>
      </header>
      <ul className="terms-tags">
        {data?.map(e => (
          <li key={e.id}>
          <Link to={`${e.name}`}>{e.name}
            <sup>
              <strong>
                <sup>{e.used}</sup>
              </strong>
            </sup>
          </Link>
        </li>
        ))}
      </ul>
    </main>
  )
}

export default CategoryList