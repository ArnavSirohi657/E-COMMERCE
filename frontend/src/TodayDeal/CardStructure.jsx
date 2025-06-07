export default function CardStructure({image,para}) {
    return (
        <div style={{
            width: '240px',
            border: '1px solid #e2e2e2',
            borderRadius: '10px',
            padding: '16px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#fff',
            margin: '12px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
        }}>
            <div style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
                boxShadow: '0 1px 4px rgba(0, 0, 0, 0.08)',
                backgroundColor: '#f9f9f9'
            }}>
                <img
                    src={image}
                    alt="Product"
                    style={{
                        width: '100%',
                        height: '220px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                    }}
                />
                <button style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'red',
                    color: '#fff',
                    fontSize: '14px',
                    padding: '4px 8px',
                    border: 'none',
                    borderRadius: '6px',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
                    cursor: 'pointer'
                }}>
                    12% off
                </button>
            </div>

            <h4 style={{
                color: '#cc0c39',
                fontSize: '15px',
                marginTop: '10px',
                marginBottom: '6px',
                fontWeight: 'bold'
            }}>
                Limited time deal
            </h4>

            <p style={{
                fontSize: '15px',
                color: '#111',
                margin: 0,
                lineHeight: '1.4em'
            }}>
                {para}
            </p>
        </div>
    );
}
