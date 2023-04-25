import React from 'react'
import { Link } from 'react-router-dom'
import { useGetBlogByUsernameQuery } from '../app/service/blogApi'

function OwnBlog() {
  const { data } = useGetBlogByUsernameQuery();

  console.log(data)
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
                          <td>{e.status==1?"Công khai": "Nháp"}</td>
                          <td>{new Date(e.createdAt).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>


                  <div className="d-flex justify-content-center mt-3" id="pagination">
                    <ul className="pagination mb-0">
                      <li className="paginate_button page-item previous disabled" id="example2_previous">
                        <a href="#" aria-controls="example2" data-dt-idx="0" tabIndex="0" className="page-link">Previous</a>
                      </li>
                      <li className="paginate_button page-item active">
                        <a href="#" aria-controls="example2" data-dt-idx="1" tabIndex="0" className="page-link">1</a>
                      </li>
                      <li className="paginate_button page-item">
                        <a href="#" aria-controls="example2" data-dt-idx="2" tabIndex="0" className="page-link">2</a>
                      </li>
                      <li className="paginate_button page-item">
                        <a href="#" aria-controls="example2" data-dt-idx="3" tabIndex="0" className="page-link">3</a>
                      </li>
                      <li className="paginate_button page-item">
                        <a href="#" aria-controls="example2" data-dt-idx="4" tabIndex="0" className="page-link">4</a>
                      </li>
                      <li className="paginate_button page-item">
                        <a href="#" aria-controls="example2" data-dt-idx="5" tabIndex="0" className="page-link">5</a>
                      </li>
                      <li className="paginate_button page-item">
                        <a href="#" aria-controls="example2" data-dt-idx="6" tabIndex="0" className="page-link">6</a>
                      </li>
                      <li className="paginate_button page-item next" id="example2_next">
                        <a href="#" aria-controls="example2" data-dt-idx="7" tabIndex="0" className="page-link">Next</a>
                      </li>
                    </ul>
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