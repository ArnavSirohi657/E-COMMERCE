export default function CategoryCard({heading,image,para}) {
    return (
      <div className="rounded-3 shadow-sm mb-4" style={{
        border: '1px solid #ddd',
        padding: '30px',
        minHeight: '250px',
        backgroundColor: '#FFF9C4',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="d-flex justify-content-between w-100">
          {/* Text Content - Takes 60% width */}
          <div className="d-flex flex-column pe-4" style={{ width: '60%' }}>
            <h4 className="fw-bold mb-3 text-dark">{heading}</h4>
            <p className="mb-4 text-secondary" style={{ fontSize: '1.1rem' }}>
              {para} &lt;= ₹300.
            </p>
            <div className="mt-auto">
              <a href="#" className="text-primary text-decoration-none fw-medium" style={{ fontSize: '1.1rem' }}>
                Check here
              </a>
            </div>
          </div>
  
          {/* Image - Takes 40% width with responsive sizing */}
          <div style={{ 
            width: '40%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: '20px'
          }}>
            <img 
              src={image} 
              alt="Apparel" 
              className="img-fluid" 
              style={{ 
                height: '200px',
                width: 'auto',
                maxWidth: '100%',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      </div>
    );
  }