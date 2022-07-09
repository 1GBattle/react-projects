import React from 'react'

import '../styles/Meals.css'

import sampleMeal_1 from '../content/img/meals/meal-1.jpg'
import sampleMeal_2 from '../content/img/meals/meal-2.jpg'

const Meals = () => {
  return (
    <section className='section-meals'>
      <div className=' heading-container container center-text'>
        <span className='subheading'>Meals</span>
        <h2 className='heading-secondary'>
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className='container grid grid--3-cols margin-bottom-md'>
        <div className='meal'>
          <img className='meal-img' src={sampleMeal_1} alt='Japanese Gyozas' />

          <div className='meal-content'>
            <div className='meal-tag'>
              <span className='tag tag-vegan'>Vegetarian</span>
            </div>

            <p className='meal-name'>Meal 1: Japanese Gyozas</p>

            <ul className='meal-attributes'>
              <li className='meal-attribute'>
                <ion-icon className='meal-icon' name='flame-outline'></ion-icon>
                <span>
                  {' '}
                  <strong>650</strong> Calories
                </span>
              </li>

              <li className='meal-attribute'>
                <ion-icon className='meal-icon' name='restaurant-outline'></ion-icon>
                <span>
                  {' '}
                  Nutriscore &reg; <strong>74</strong>
                </span>
              </li>

              <li className='meal-attribute'>
                <ion-icon className='meal-icon' name='star-outline'></ion-icon>
                <span>
                  {' '}
                  <strong>4.9</strong> rating (537 reviews)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className='meal'>
          <img className='meal-img' src={sampleMeal_2} alt='Japanese Gyozas' />

          <div className='meal-content'>
            <div className='meal-tag'>
              <span className='tag tag-vegan'>Vegan </span>{' '}
              <span className='tag tag-paleo'> Paleo</span>
            </div>

            <p className='meal-name'>Meal 2: Avocado Salad</p>

            <ul className='meal-attributes'>
              <li className='meal-attribute'>
                <ion-icon className='meal-icon' name='flame-outline'></ion-icon>
                <span>
                  {' '}
                  <strong>400</strong> Calories
                </span>
              </li>

              <li className='meal-attribute'>
                <ion-icon className='meal-icon' name='restaurant-outline'></ion-icon>
                <span>
                  {' '}
                  Nutriscore &reg; <strong>92</strong>
                </span>
              </li>

              <li className='meal-attribute'>
                <ion-icon className='meal-icon' name='star-outline'></ion-icon>
                <span>
                  {' '}
                  <strong>4.8</strong> rating (441 reviews)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className='diets'>
          <h3 className='heading-tertiary'>Works with any diet:</h3>
          <ul className='dlist'>
            <li className='list-item'>
              <ion-icon classname='list-icon' name='checkmark-outline'></ion-icon>
              <span className='diet-name'>Vegetarian</span>
            </li>

            <li className='list-item'>
              <ion-icon classname='dist-icon' name='checkmark-outline'></ion-icon>
              <span className='diet-name'>Vegan</span>
            </li>

            <li className='list-item'>
              <ion-icon classname='list-icon' name='checkmark-outline'></ion-icon>
              <span className='diet-name'>Pescatarian</span>
            </li>

            <li className='list-item'>
              <ion-icon classname='list-icon' name='checkmark-outline'></ion-icon>
              <span className='diet-name'>Gluten-free</span>
            </li>

            <li className='list-item'>
              <ion-icon classname='list-icon' name='checkmark-outline'></ion-icon>
              <span className='diet-name'>Lactose-free</span>
            </li>

            <li className='list-item'>
              <ion-icon classname='list-icon' name='checkmark-outline'></ion-icon>
              <span className='diet-name'>Keto</span>
            </li>

            <li className='list-item'>
              <ion-icon classname='list-icon' name='checkmark-outline'></ion-icon>
              <span className='diet-name'>Paleo</span>
            </li>

            <li className='list-item'>
              <ion-icon classname='list-icon' name='checkmark-outline'></ion-icon>
              <span className='diet-name'>Low FODMAP</span>
            </li>

            <li className='list-item'>
              <ion-icon classname='list-icon' name='checkmark-outline'></ion-icon>
              <span className='diet-name'>Kid-friendly</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='container all-recipes'>
        <a href='#' className='link'>
          See all recipes &rarr;
        </a>
      </div>
    </section>
  )
}

export default Meals
