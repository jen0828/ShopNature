export default function DetailPage() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://images.unsplash.com/photo-1602409339188-95d178a611a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" width="100%" alt="product"/>
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">Product</h4>
            <p>Details</p>
            <p>£60.00</p>
            <button className="btn btn-danger">Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}
