'use client';

import image2 from '@/assets/img/megnify-glass.webp';
import image4 from '@/assets/img/repair-by-pen.webp';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div id="carouselExample" className="carousel slide bg-white position-relative" style={{ minHeight: '600px' }}>
      <div className="carousel-inner" style={{ position: 'relative', minHeight: '600px' }}>
        
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="position-relative" style={{ minHeight: '600px' }}>
            {/* Background Image */}
            <Image
              src={image4}
              alt="Mobile Repair"
              fill
              style={{
                objectFit: 'cover',
                filter: 'blur(4px) brightness(0.75)',
                zIndex: 0,
              }}
              priority
            />

            {/* Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1,
              }}
            />

            {/* Centered Content */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '3rem 1rem',
                color: 'white',
                textAlign: 'center',
              }}
            >
              <h1
                style={{
                  fontWeight: 900,
                  fontSize: '2.8rem',
                  marginBottom: '1rem',
                  textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
                }}
              >
                Fast & Reliable Mobile Repair Service
              </h1>
              <p
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  marginBottom: '2rem',
                  textShadow: '1px 1px 6px rgba(0,0,0,0.7)',
                }}
              >
                We pick up your device, repair it with care, and drop it back right at your doorstep — all at affordable prices.
              </p>
              <Link href="/get-appointment" passHref>
                <button
                  style={{
                    backgroundColor: '#004cff',
                    color: 'white',
                    fontWeight: 600,
                    padding: '12px 36px',
                    fontSize: '1.15rem',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0, 76, 255, 0.5)',
                  }}
                >
                  Get Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="position-relative" style={{ minHeight: '600px' }}>
            {/* Background Image */}
            <Image
              src={image2}
              alt="Magnifying Glass"
              fill
              style={{
                objectFit: 'cover',
                filter: 'blur(4px) brightness(0.75)',
                zIndex: 0,
              }}
              priority
            />

            {/* Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1,
              }}
            />

            {/* Centered Content */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '3rem 1rem',
                textAlign: 'center',
                color: 'white',
              }}
            >
              <h1
                style={{
                  fontWeight: 900,
                  fontSize: '2.8rem',
                  marginBottom: '1rem',
                  textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
                }}
              >
                We Make Your Phone Workable For You
              </h1>
              <p
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 500,
                  marginBottom: '2rem',
                  lineHeight: '1.5',
                  textShadow: '1px 1px 6px rgba(0,0,0,0.7)',
                  maxWidth: '700px',
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, odit. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nihil repellat aliquid ullam, soluta neque vitae accusantium magnam facilis.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link href="/blog" passHref>
                  <button
                    style={{
                      backgroundColor: '#004cff',
                      color: 'white',
                      fontWeight: 600,
                      padding: '10px 25px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Read More
                  </button>
                </Link>
                <Link href="/signup" passHref>
                  <button
                    style={{
                      backgroundColor: '#004cff',
                      color: 'white',
                      fontWeight: 600,
                      padding: '10px 25px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Register Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
        style={{ filter: 'invert(0.6)', zIndex: 3 }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
        style={{ filter: 'invert(0.6)', zIndex: 3 }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeroSection;
