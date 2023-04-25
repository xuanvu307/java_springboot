import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLazyGetAllBlogQuery } from '../app/service/blogApi'
import ReactPaginate from 'react-paginate';

function ListBlog() {
  const [getAllBlog, { data, isLoading }] = useLazyGetAllBlogQuery();

  useEffect(() => {
    getAllBlog({ page: 1, pageSize: 10 })
  }, [])

  console.log(data)
  
  const handlePageClick = (page) => {
    getAllBlog({ page: page.selected + 1, pageSize: 10 })
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
                        <th>Tác giả</th>
                        <th>Danh mục</th>
                        <th>Trạng thái</th>
                        <th>Ngày tạo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.content?.map((e) => (
                        <tr key={e.id}>
                          <td>
                            <Link to={`/admin/blogs/${e.id}`}>
                              {e.title}
                            </Link>
                          </td>
                          <td>
                            <a href="#">{e.user.name}</a>
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

export default ListBlog