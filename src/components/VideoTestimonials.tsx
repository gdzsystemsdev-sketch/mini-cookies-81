import CTAButton from './CTAButton';
import VideoTestimonialCard from './VideoTestimonialCard';

const testimonials = [
  {
    title: 'Testimonial 01',
    src: '/videos/tss-1-c.mp4',
    poster: '/thumbnails/TS-1_frame_0_41_19f.jpeg',
  },
  {
    title: 'Testimonial 02',
    src: '/videos/tss-2-c.mp4',
    poster: '/thumbnails/TS-2_frame_0_01_18f.jpeg',
  },
];

export default function VideoTestimonials() {
  return (
    <section className="py-10 sm:py-32 px-6 bg-jet-black border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">Video Testimonials</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <h2
          className="font-extrabold tracking-tight leading-[1.1] mb-6 text-center"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontStyle: 'italic' }}
        >
          Hear It From <span style={{ color: '#ff1493' }}>Our Models</span>
        </h2>
        <p className="text-base sm:text-lg text-white/50 font-light text-center max-w-xl mx-auto mb-16 leading-relaxed">
          Real stories from models who started with us and are now earning on their own terms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <VideoTestimonialCard
              key={testimonial.src}
              title={testimonial.title}
              src={testimonial.src}
              poster={testimonial.poster}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <CTAButton label="Apply Now" variant="solid" color="pink" href="#application" />
        </div>
      </div>
    </section>
  );
}
