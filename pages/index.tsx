import Image from 'next/image';
import { useRef, useState } from 'react';
import { IoBookOutline, IoCloseOutline } from 'react-icons/io5';

import { TestimonialItem } from '@/src/types';
import IconQuote from '@/public/icon-quote.svg';
import {
  aboutData,
  educationData,
  experienceData,
  testimonialItems,
} from '@/src/data';

export default function Resume() {
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<TestimonialItem | null>(null);

  const onToggleTestimonial = (testimonial: TestimonialItem | null) => {
    if (modalContainerRef.current && overlayRef.current) {
      setSelectedTestimonial(testimonial);

      modalContainerRef.current.classList.toggle('active');
      overlayRef.current.classList.toggle('active');
    }
  };

  return (
    <article className='about active'>
      <header>
        <h2 className='h2 article-title'>Resume</h2>
      </header>

      <section className='about-text'>
        <h3 className='h3 about-title'>About</h3>
        {aboutData.map((item, key) => (
          <p key={key}>{item}</p>
        ))}
      </section>

      <section className='timeline'>
        <div className='title-wrapper'>
          <div className='icon-box'>
            <IoBookOutline />
          </div>

          <h3 className='h3'>Experience</h3>
        </div>

        <ol className='timeline-list'>
          {experienceData.map((experience, key) => (
            <li className='timeline-item' key={key}>
              <h4 className='h4 timeline-item-title'>{experience.title}</h4>

              <span>{experience.date}</span>

              <p className='timeline-text'>{experience.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className='timeline'>
        <div className='title-wrapper'>
          <div className='icon-box'>
            <IoBookOutline />
          </div>

          <h3 className='h3'>Education</h3>
        </div>

        <ol className='timeline-list'>
          {educationData.map((education, key) => (
            <li className='timeline-item' key={key}>
              <h4 className='h4 timeline-item-title'>
                {education.institution}
              </h4>

              <span>{education.date}</span>

              <p className='timeline-text'>{education.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className='testimonials'>
        <h3 className='h3 testimonials-title'>Testimonials</h3>

        <ul className='testimonials-list has-scrollbar'>
          {testimonialItems.map((item, key) => (
            <li
              className='testimonials-item'
              key={key}
              onClick={() => onToggleTestimonial(item)}
            >
              <div className='content-card'>
                <figure className='testimonials-avatar-box'>
                  <Image
                    className='image'
                    src={item.photo}
                    alt={item.name}
                    width={60}
                    height={60}
                  />
                </figure>

                <h4 className='h4 testimonials-item-title'>{item.name}</h4>

                <div className='testimonials-text'>
                  <p>{item.testimonial}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div
        className='modal-container'
        ref={modalContainerRef}
        data-testid='modal-container'
      >
        <div className='overlay' ref={overlayRef} data-testid='overlay'></div>

        <section className='testimonials-modal'>
          <button
            className='modal-close-btn'
            onClick={() => onToggleTestimonial(null)}
          >
            <IoCloseOutline />
          </button>

          <div className='modal-img-wrapper'>
            <figure className='modal-avatar-box'>
              {selectedTestimonial && (
                <Image
                  src={selectedTestimonial.photo}
                  alt={selectedTestimonial.name}
                  className='image'
                  height={80}
                  width={80}
                />
              )}
            </figure>

            <Image src={IconQuote} alt='quote' height={40} width={40} />
          </div>

          <div className='modal-content'>
            <h4 className='h3 modal-title'>{selectedTestimonial?.name}</h4>
            <time dateTime='2021-06-14'>{selectedTestimonial?.role}</time>
            <div>
              <p>{selectedTestimonial?.testimonial}</p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
