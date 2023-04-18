import React from 'react'
import { useGetBlogByCategoryQuery } from '../../../app/service/categoryService'
import { Link, useParams } from 'react-router-dom'

function CategoryDetail() {
    const { categoryName } = useParams();
    const { data } = useGetBlogByCategoryQuery(categoryName)

    console.log(data);
    return (
        <main className="main">
            <header className="entry-header">
                <h1>Tag : {categoryName}</h1>
                <br />
            </header>
            {data?.map((e) => (
                <article className="post-entry" key={e.id}>
                    <header className="entry-header">
                        <h2>
                            {e.title}
                        </h2>
                    </header>
                    <div className="entry-content">
                        <p>
                            {e.description}
                        </p>
                    </div>
                    <footer className="entry-footer">
                        <span>01/02/2023</span>
                    </footer>
                    <Link className="entry-link" to={`/blogs/${e.id}/${e.slug}`}></Link>
                </article>
            ))}
        </main>
    )
}

export default CategoryDetail