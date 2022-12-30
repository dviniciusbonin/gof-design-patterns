import { MealCompositeContract } from '../interfaces/meal-composite-contract'
import { AbstractMeal } from './abstract-meal'

export class MealBox implements MealCompositeContract {
  private _children: AbstractMeal[] = []

  getPrice(): number {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0)
  }

  add(...meals: AbstractMeal[]) {
    meals.forEach((meal) => this._children.push(meal))
  }
}
