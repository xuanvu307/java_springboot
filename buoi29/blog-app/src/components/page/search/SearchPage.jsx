import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLazyGetBlogBynameQuery } from '../../../app/service/blogService'

function SearchPage() {
    const [getBlogByname, result, isLoading] = useLazyGetBlogBynameQuery();

    if (isLoading) (
        <h2>Loading.....</h2>
    )
    const [valueInput, setValueInput] = useState("");
    console.log(result.data);

    const handleValue = (e) => {
        console.log(valueInput)
        if (e.key === "Enter") {
            getBlogByname(valueInput)
        }
    }
    return (
        <main className="main">
            <header className="page-header">
                <h1>
                    Search
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </h1>
                <div className="post-description">Tìm kiếm bài viết</div>
                <div className="post-meta"></div>
            </header>
            <div id="searchbox">
                <input id="searchInput" value={valueInput} onChange={e => setValueInput(e.target.value)} onKeyDown={handleValue} autoFocus="" placeholder="Tìm kiếm bài viết" type="search" autoComplete="off" />
                <ul id="searchResults">
                    {result?.data?.map((e) => (
                        <li className="post-entry" key={e.id}>
                            <header className="entry-header">
                                {e.title}
                            </header>
                            <Link to = {`/blogs/${e.id}/${e.slug}`} aria-label="Truyền dữ liệu giữa React Components"></Link>
                        </li>
                    ))}
            </ul>
        </div>
        </main >
    )
}

export default SearchPage