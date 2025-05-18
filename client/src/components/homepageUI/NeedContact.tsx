import bgImg from '@/assets/img/repair-phone.jpg';
import Image from 'next/image';
import Link from 'next/link';

const NeedContact = () => {
  return (
    <div className="position-relative" style={{ maxHeight: '20rem', overflow: 'hidden' }}>
      {/* Overlay Text */}
      <div
        className="position-absolute text-white text-center px-3"
        style={{
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
          zIndex: 10,
        }}
      >
        <h4 className="fw-bold mb-3" style={{ fontSize: '1.75rem' }}>
          BOOK YOUR SERVICE NOW
        </h4>
        <p className="mb-3">
          Book Online or Call Us at{' '}
          <a
            href="tel:9811XXXXXX"
            className="text-primary"
            style={{
              fontSize: '1.5rem',
              fontWeight: 900,
              textDecoration: 'none',
            }}
          >
            9811XXXXXX
          </a>
        </p>
        <Link href="/contact">
          <button className="btn btn-primary px-4 py-2">BOOK REPAIR</button>
        </Link>
      </div>

      {/* Background Image */}
      <Image
        src={bgImg}
        width={900}
        height={400}
        alt="contact background"
        className="w-100"
        style={{
          objectFit: 'cover',
          filter: 'brightness(40%)',
        }}
        priority
      />
    </div>
  );
};

export default NeedContact;
