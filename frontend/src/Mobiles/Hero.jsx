export default function Hero() {
    return (
      <div className="container my-4">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 text-center">
            <img
              src="/Mobiles/Mobiles01.png"
              alt="Mobile 1"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "300px" }}
            />
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/Mobiles/Mobile02.jpg"
              alt="Mobile 2"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "300px" }}
            />
          </div>
        </div>
        <div>
            <img src="/Mobiles/Mobile03.gif"/>
        </div>
        <div className="text-center">
            <img src="/Mobiles/Mobile04.gif"/>
        </div>
      </div>
    );
  }
  