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
        getCommentOfBlogId({idBlog: blogId, page: result.originalArgs.page - 1})
    }
    const nextPage = () => {
        getCommentOfBlogId({idBlog: blogId, page: result.originalArgs.page + 1})
    }
    return (
        <main className="main">
            <article className="post-single">
                <header className="post-header">
                    <h1 className="post-title">{dataBlog?.title}</h1>
                    <div className="post-meta">
                        <span>{dataBlog?.createdAt}</span>
                    </div>
                </header>
                <div className="post-content">
                    <p>{dataBlog?.content}</p>
                </div>
            </article>
            <div dir="ltr" className="plugin chrome webkit win x2 Locale_vi_VN">
                <div className="_li">
                    <div className="pluginSkinLight pluginFontHelvetica">
                        <div>
                            <div className="_56q9">
                                <div className="_2pi8">
                                    <div className="_4uyl _1zz8 _2392 clearfix" direction="left">
                                        <div className="_ohe lfloat">
                                            <div className="img _8o _8s UFIImageBlockImage">
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
                                                                <span></span>
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
                                    <div className="_5lm5 _2pi3 _3-8y">
                                        <div direction="left" className="clearfix">
                                            <div className="_ohe lfloat">
                                                <i className="img _8o _8r img sp_Ip2XZyfUSLx_2x sx_9f531a" alt="" data-visualcompletion="css-img"></i>
                                            </div>
                                            <div className="">
                                                <div className="_42ef _8u">
                                                    <Link target="_blank" to="https://developers.facebook.com/products/social-plugins/comments/?utm_campaign=social_plugins&amp;utm_medium=offsite_pages&amp;utm_source=comments_plugin">
                                                        Plugin bình luận trên Facebook
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_491z clearfix">
                                        <div className="_ohe lfloat">
                                            <span>
                                                <span className=" _50f7">{result?.data?.totalElements} bình luận</span>
                                            </span>
                                        </div>
                                        {/* <div>
                                            <div className="_ohe lfloat">
                                                <span className="_pup">Sắp xếp theo</span>
                                                <div alignh="right" className="_3-8_ _6a _6b" valign="middle">
                                                    <input type="hidden" autoComplete="off" value="time" />
                                                    <a className="_55pi _2agf _4o_4 _4jy0 _4jy3 _517h _51sy _42ft" aria-haspopup="true" role="button" href="#" aria-controls="js_15v" tabIndex="0">
                                                        <span className="_55pe">Cũ nhất</span>
                                                        <span alt="" className="_3-99 _4o_3">
                                                            <i alt="" data-visualcompletion="css-img" className="img sp_Ip2XZyfUSLx_2x sx_935cc3"></i>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>

                                    <div className="_4k-6">
                                        {result?.data?.content.map(e => (
                                            <div className="_3-8y _5nz1 clearfix" direction="left" key={e.id}>
                                                <div className="_ohe lfloat">
                                                    <a href="#" src="#" target="_blank" className="img _8o _8s UFIImageBlockImage">
                                                        <img className="_1ci img" src="https://scontent.fhan15-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&amp;_nc_cat=1&amp;ccb=1-7&amp;_nc_sid=dbb9e7&amp;_nc_ohc=4WG6vRsKhfwAX-Wmf9O&amp;_nc_ht=scontent.fhan15-1.fna&amp;edm=AJqh0Q8EAAAA&amp;oh=00_AfCoxyxVhLrdS8eNuyn0tUvh3mxLaJ0nuwo61HqzeG99Vw&amp;oe=64636138" alt="" />
                                                    </a>
                                                </div>
                                                <div className="">
                                                    <div className="UFIImageBlockContent _42ef clearfix" direction="right">
                                                        <div className="_ohf rfloat">
                                                            <div>
                                                            </div>
                                                        </div>
                                                        <div className="">
                                                            <div>
                                                                <span>
                                                                    <a target="_blank" className=" UFICommentActorName" dir="ltr" href="#">
                                                                        {e?.user?.name}
                                                                    </a>
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
                                                                        <a className="uiLinkSubtle" href="#" data-ft="{&quot;tn&quot;:&quot;N&quot;}" target="_blank">
                                                                            <abbr aria-label="vài giây trước" minimize="true" className="UFISutroCommentTimestamp livetimestamp" data-utime="1681643864" data-minimize="true" data-shorten="true">{e.createdAt}</abbr>
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
                                                {
                                                    !result?.data?.first &&
                                                    <button className="prev" onClick={prePage}>Mới hơn</button>
                                                }
                                                {
                                                    !result?.data?.last &&
                                                    <button className="next" onClick={nextPage}>Cũ hơn</button>
                                                }
                                            </nav>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="_5xew uiLayer hidden_elem">
                    <div className="_54nq _57di _558b _2n_z" id="js_15v">
                        <div className="_54ng">
                            <ul className="_54nf" role="menu">
                                <li className="_54ni __MenuItem" role="presentation">
                                    <a className="_54nc" href="#" role="menuitemcheckbox" aria-checked="false">
                                        <span>
                                            <span className="_54nh">Mới nhất</span>
                                        </span>
                                    </a>
                                </li>
                                <li className="_54ni __MenuItem _54nd" role="presentation">
                                    <Link href="#" role="menuitemcheckbox" aria-checked="true">
                                        <span>
                                            <span className="_54nh">Cũ nhất</span>
                                        </span>
                                    </Link>
                                </li>
                                <li className="_54ni __MenuItem" role="presentation">
                                    <a className="_54nc" href="#" role="menuitemcheckbox">
                                        <span>
                                            <span className="_54nh"></span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </main >
    )
}


export default BlogDetail