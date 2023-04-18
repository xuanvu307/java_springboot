import React, { useEffect } from 'react'
import { useGetBlogByIdQuery } from '../../../app/service/blogService'
import { Link, useParams } from 'react-router-dom'
import { useLazyGetCommentOfBlogIdQuery } from '../../../app/service/commentService';

function BlogDetail() {
    const { blogId } = useParams();
    const { blogSlug } = useParams();
    const { data: dataBlog, isLoading: isLoadingBlog } = useGetBlogByIdQuery({ blogId: blogId, blogSlug: blogSlug })
    const [getCommentOfBlogId, result, isLoading] = useLazyGetCommentOfBlogIdQuery();

    if (isLoadingBlog) (
        <h2>Loading.....</h2>
    )

    useEffect(() => {
        getCommentOfBlogId({ idBlog: blogId, page: 0 });
    }, [])

    const prePage = () => {
        getCommentOfBlogId({ idBlog: blogId, page: result.originalArgs.page - 1 })
    }
    const nextPage = () => {
        getCommentOfBlogId({ idBlog: blogId, page: result.originalArgs.page + 1 })
    }

    return (
        <main className="main">
            <div className="post-single">
                <header className="post-header">
                    <h1 className="post-title">{dataBlog?.title}</h1>
                    <div className="post-meta">
                        <span>{dataBlog?.createdAt}</span>
                    </div>
                </header>
                <div className="post-content">
                    <p>{dataBlog?.content}</p>
                </div>
            </div>
            <div className="_li">
                <div className="pluginSkinLight pluginFontHelvetica">
                    <div>
                        <div className="_56q9">
                            <div className="_2pi8">
                                <div className="_4uyl _1zz7 _2392 clearfix" direction="left">
                                    <div className="_ohe lfloat">
                                        <div className="_4cqr">
                                            <a src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" target="_blank" className="img _8o _8s UFIImageBlockImage">
                                                <img className="_1ci img" src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="" />
                                            </a>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="UFIImageBlockContent _42ef">
                                            <div>
                                                <div className="UFIInputContainer">
                                                    <textarea aria-label="Thêm bình luận" className="_1cb _1u9t" placeholder="Viết bình luận..."></textarea>
                                                    <div className="UFICommentAttachmentButtons clearfix hidden_elem"></div>
                                                </div>
                                                <div className="_4uym">
                                                    <div className="_5tr6 clearfix _2ph- clearfix">
                                                        <div className="_ohe lfloat">
                                                            <span>
                                                            </span>
                                                        </div>
                                                        <div className="_ohf rfloat">
                                                            <span>
                                                                <button className="rfloat _3-99 _4jy0 _4jy3 _4jy1 _51sy selected _42ft _42fr" disabled="" type="submit" value="1">Đăng nhập vào bài viết</button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="_4k-6">
                                    <div className="_491z clearfix">
                                        <div className="_ohe lfloat">
                                            <span>
                                                <span className=" _50f7">Có {result?.data?.totalElements} bình luận trong bài viết</span>
                                            </span>
                                        </div>
                                    </div>
                                    {result?.data?.content.map(e => (
                                        <div className="_3-8y _5nz1 clearfix" direction="left" key={e.id}>
                                            <div className="_ohe lfloat">
                                                <a href="#" src="https://scontent.fhan5-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p48x48&amp;_nc_cat=1&amp;ccb=1-7&amp;_nc_sid=dbb9e7&amp;_nc_ohc=4WG6vRsKhfwAX_8Ud9V&amp;_nc_ht=scontent.fhan5-1.fna&amp;edm=AJqh0Q8EAAAA&amp;oh=00_AfDvd83NFzcg2WVVCQ761B_j-HUdggO6pWTdKIdaxf34KA&amp;oe=64663C78" target="_blank" className="img _8o _8s UFIImageBlockImage">
                                                    <img className="_1ci img" src="https://scontent.fhan5-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p48x48&amp;_nc_cat=1&amp;ccb=1-7&amp;_nc_sid=dbb9e7&amp;_nc_ohc=4WG6vRsKhfwAX_8Ud9V&amp;_nc_ht=scontent.fhan5-1.fna&amp;edm=AJqh0Q8EAAAA&amp;oh=00_AfDvd83NFzcg2WVVCQ761B_j-HUdggO6pWTdKIdaxf34KA&amp;oe=64663C78" alt="" />
                                                </a>
                                            </div>
                                            <div>
                                                <div className="UFIImageBlockContent _42ef clearfix" direction="right">
                                                    <div>
                                                        <div>
                                                            <span>
                                                                <Link target="_blank" className=" UFICommentActorName" dir="ltr" href="#">{e.user.name}</Link>
                                                            </span>
                                                            <div className="_3-8m">
                                                                <div className="_30o4">
                                                                    <span>
                                                                        <span className="_5mdd">
                                                                            <span>{e.content}</span>
                                                                        </span>
                                                                    </span>
                                                                    <span></span>
                                                                </div>
                                                            </div>
                                                            <div className="_2vq9 fsm fwn fcg">
                                                                <a href="#">Thích</a>
                                                                <span aria-hidden="true"> · </span>
                                                                <a href="#">Phản hồi</a>
                                                                <span aria-hidden="true"> · </span>
                                                                <span>
                                                                    <a className="uiLinkSubtle" href="https://huydq.dev/blog/huong-dan-su-dung-createasyncthunk-trong-redux-toolkit/?fb_comment_id=927859001588852" data-ft="{&quot;tn&quot;:&quot;N&quot;}" target="_blank">
                                                                        <abbr aria-label="2 ngày trước" minimize="true" className="UFISutroCommentTimestamp livetimestamp" data-utime="1681643864" data-minimize="true" data-shorten="true">
                                                                            {e.createdAt}
                                                                        </abbr>
                                                                    </a>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <footer className="page-footer">
                                        <nav className="pagination">
                                            {!result?.data?.first &&
                                                <button className="prev" onClick={prePage}>« Trang trước</button>
                                            }
                                            {
                                                !result?.data?.last &&
                                                <button className="next" onClick={nextPage}>Trang tiếp theo »</button>
                                            }
                                        </nav>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default BlogDetail