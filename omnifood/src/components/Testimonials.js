import React from 'react'

import '../styles/Testimonials.css'

import customerTestimonialImage_1 from '../content/img/customers/dave.jpg'
import customerTestimonialImage_2 from '../content/img/customers/ben.jpg'
import customerTestimonialImage_3 from '../content/img/customers/steve.jpg'
import customerTestimonialImage_4 from '../content/img/customers/hannah.jpg'

import galleryImage_1 from '../content/img/gallery/gallery-1.jpg'
import galleryImage_2 from '../content/img/gallery/gallery-2.jpg'
import galleryImage_3 from '../content/img/gallery/gallery-3.jpg'
import galleryImage_4 from '../content/img/gallery/gallery-4.jpg'
import galleryImage_5 from '../content/img/gallery/gallery-5.jpg'
import galleryImage_6 from '../content/img/gallery/gallery-6.jpg'
import galleryImage_7 from '../content/img/gallery/gallery-7.jpg'
import galleryImage_8 from '../content/img/gallery/gallery-8.jpg'
import galleryImage_9 from '../content/img/gallery/gallery-9.jpg'
import galleryImage_10 from '../content/img/gallery/gallery-10.jpg'
import galleryImage_11 from '../content/img/gallery/gallery-11.jpg'
import galleryImage_12 from '../content/img/gallery/gallery-12.jpg'

const Testimonials = () => {
  return (
    <div>
      <section className='section-testimonials grid--2-cols'>
        <div className='testimonials'>
          <div className='testimonials-heading'>
            <h2 className='subheading '>Testimonials</h2>
            <p className='section-heading heading-tertiary center-text'>
              Don't just take our word hear from our customers
            </p>
          </div>

          <figure className='testimonial'>
            <img
              src={customerTestimonialImage_1}
              className='customer-testimonial-img'
              alt='recent customer'
            />
            <blockquote className='testimonial-text'>
              Inexpensive, healthy and great-tasting meals, without even having to
              order manually! It feels truly magical.
            </blockquote>

            <p className='customer-testimonial-name'>-- Dave Bryson</p>
          </figure>

          <figure className='testimonial'>
            <img
              src={customerTestimonialImage_2}
              className='customer-testimonial-img'
              alt='recent customer'
            />
            <blockquote className='testimonial-text'>
              The AI algorithm is crazy good, it chooses the right meals for me every
              time. It's amazing not to worry about food anymore!
            </blockquote>

            <p className='customer-testimonial-name'>-- Ben Hadley</p>
          </figure>

          <figure className='testimonial'>
            <img
              src={customerTestimonialImage_3}
              className='customer-testimonial-img'
              alt='recent customer'
            />
            <blockquote className='testimonial-text'>
              Omnifood is a life saver! I just started a company, so there's no time
              for cooking. I couldn't live without my daily meals now!
            </blockquote>

            <p className='customer-testimonial-name'>-- Steve Miller</p>
          </figure>

          <figure className='testimonial'>
            <img
              src={customerTestimonialImage_4}
              className='customer-testimonial-img'
              alt='recent customer'
            />
            <blockquote className='testimonial-text'>
              I got Omnifood for the whole family, and it frees up so much time!
              Plus, everything is organic and vegan and without plastic.
            </blockquote>

            <p className='customer-testimonial-name'>-- Hannah Smith</p>
          </figure>
        </div>
      </section>

      <div className='gallery'>
        <figure className='gallery-item'>
          <img
            src={galleryImage_1}
            className='gallery-img'
            alt='tasty Omnifood meal'
          />
        </figure>

        <figure className='gallery-item'>
          <img
            src={galleryImage_2}
            className='gallery-img'
            alt='tasty Omnifood meal'
          />
        </figure>

        <figure className='gallery-item'>
          <img
            src={galleryImage_3}
            className='gallery-img'
            alt='tasty Omnifood meal'
          />
        </figure>

        <figure className='gallery-item'>
          <img
            src={galleryImage_4}
            className='gallery-img'
            alt='tasty Omnifood meal'
          />
        </figure>

        <figure className='gallery-item'>
          <img
            src={galleryImage_5}
            className='gallery-img'
            alt='tasty Omnifood meal'
          />
        </figure>

        <figure className='gallery-item'>
          <img
            src={galleryImage_6}
            className='gallery-img'
            alt='tasty Omnifood meal'
          />
        </figure>
        <figure className='gallery-item'>
          <img
            src={galleryImage_7}
            className='gallery-img'
            alt='tasty Omnifood meal'
          />
        </figure>
        <figure className='gallery-item'>
          <img
            src={galleryImage_8}
            className='gallery-img'
            alt='tasty Omnifood meal'
          />
        </figure>
        <figure className='gallery-item'>
          <img
            src={galleryImage_9}
            className='gallery-img'
            alt='tasty Omnifood meal'
          />
        </figure>
        <figure className='gallery-item'>
          <img
            src={galleryImage_10}
            className='gallery-img'
            alt='tasty Omnifood meal'
          />
        </figure>
        <figure className='gallery-item'>
          <img
            src={galleryImage_11}
            className='gallery-img'
            alt='tasty Omnifood meal'
          />
        </figure>
        <figure className='gallery-item'>
          <img
            src={galleryImage_12}
            className='gallery-img'
            alt='tasty Omnifood meal'
          />
        </figure>
      </div>
    </div>
  )
}

export default Testimonials
