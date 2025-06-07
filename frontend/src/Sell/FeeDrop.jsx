export default function FeeDrop() {
    return (
      <div className="d-flex justify-content-center my-5">
        <button 
          className="btn px-4 py-2 rounded-pill fw-bold"
          style={{
            backgroundColor: '#FF6B00',
            color: 'white',
            fontSize: '1.1rem',
            border: 'none',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            minWidth: '300px'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Know more about fee drop here
        </button>
      </div>
    );
  }