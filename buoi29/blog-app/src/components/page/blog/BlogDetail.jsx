import React from 'react'
import { useGetBlogByIdQuery } from '../../../app/service/blogService'
import { useParams } from 'react-router-dom'

function BlogDetail() {
    const {blogId} = useParams();
    const {blogSlug} = useParams();
    const {data} = useGetBlogByIdQuery({blogId: blogId, blogSlug: blogSlug})

    console.log(data)
    return (
        <main className="main">
            <article className="post-single">
                <header className="post-header">
                    <h1 className="post-title">{data?.title}</h1>
                    <div className="post-meta">
                        {/* <span>{data}</span> */}
                    </div>
                </header>
                <div className="post-content">
                    <p>Dạo này Chat GPT đang rất hot, được thần thành hóa lên quá khiến nhiều người lo sợ nó sẽ mất công việc của mình. Vậy Chat GPT cụ thể là gì, dùng như nào?</p>
                </div>
            </article>
        </main>
    )
}

export default BlogDetail