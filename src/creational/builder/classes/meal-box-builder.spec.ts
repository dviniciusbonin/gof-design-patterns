import { MealBox } from './meal-box'
import { MealBoxBuilder } from './meal-box-builder'

describe('Meal box builder', () => {
  it('should create meal box object', () => {
    const mealBoxBuilder = new MealBoxBuilder()

    mealBoxBuilder.makeMeal()

    expect(mealBoxBuilder.meal).toBeInstanceOf(MealBox)
    expect(mealBoxBuilder.meal.getPrice()).toEqual(15)
  })

  it('should create meal box object with meat', () => {
    const mealBoxBuilder = new MealBoxBuilder()

    mealBoxBuilder.makeMeat()

    expect(mealBoxBuilder.meal).toBeInstanceOf(MealBox)
    expect(mealBoxBuilder.meal.getPrice()).toEqual(20)
  })

  it('should create meal box object with dessert', () => {
    const mealBoxBuilder = new MealBoxBuilder()

    mealBoxBuilder.makeDessert()

    expect(mealBoxBuilder.meal).toBeInstanceOf(MealBox)
    expect(mealBoxBuilder.meal.getPrice()).toEqual(12)
  })

  it('should create meal box object in multiple steps', () => {
    const mealBoxBuilder = new MealBoxBuilder()

    mealBoxBuilder.makeMeal()
    mealBoxBuilder.makeMeat()
    mealBoxBuilder.makeDessert()

    expect(mealBoxBuilder.meal).toBeInstanceOf(MealBox)
    expect(mealBoxBuilder.meal.getPrice()).toEqual(47)
  })
})
