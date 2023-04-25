import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLazyGetBlogByUsernameQuery } from '../app/service/blogApi'
import ReactPaginate from 'react-paginate';
import { toast } from 'react-toastify';

function OwnBlog() {
  const [getBlogByUsername, { data, isLoading }] = useLazyGetBlogByUsernameQuery();

  useEffect(() => {
    getBlogByUsername({ page: 1, pageSize: 5 })
  }, [])
  const handlePageClick = (page) => {
    getBlogByUsername({ page: page.selected + 1, pageSize: 5 })
  }
  
  return (
    <div>
      <section className="content">
        <div className="container-fluid">
          <div className="row py-2">
            <div className="col-12">
              <Link type="button" className="btn btn-primary" to={'/admin/blogs/create'}>
                <i className="fas fa-plus"></i> Viết bài
              </Link>
              <Link type="button" className="btn btn-info" to={'/admin/blogs'}>
                <i className="fas fa-redo"></i> Refresh
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Tiêu đề</th>
                        <th>Danh mục</th>
                        <th>Trạng thái</th>
                        <th>Ngày tạo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.content.map(e => (
                        <tr key={e.id}>
                          <td>
                            <Link to={`/admin/blogs/${e.id}`}>{e.title}</Link>
                          </td>
                          <td>
                            {e.categories.map((c) => (
                              c.name
                            )).join(", ")}
                          </td>
                          <td>{e.status == 1 ? "Công khai" : "Nháp"}</td>
                          <td>{new Date(e.createdAt).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="d-flex justify-content-center mt-3" id="pagination">
                    <ReactPaginate
                      nextLabel="next >"
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={3}
                      marginPagesDisplayed={2}
                      pageCount={data?.totalPages}
                      previousLabel="< previous"
                      pageClassName="page-item"
                      pageLinkClassName="page-link"
                      previousClassName="page-item"
                      previousLinkClassName="page-link"
                      nextClassName="page-item"
                      nextLinkClassName="page-link"
                      breakLabel="..."
                      breakClassName="page-item"
                      breakLinkClassName="page-link"
                      containerClassName="pagination"
                      activeClassName="active"
                      renderOnZeroPageCount={null}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OwnBlog