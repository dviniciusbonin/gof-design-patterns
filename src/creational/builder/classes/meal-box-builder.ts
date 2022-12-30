import { MealBoxBuilderContract } from '../interfaces/meal-box-builder-contract'
import { Beans } from './beans'
import { Dessert } from './dessert'
import { MealBox } from './meal-box'
import { Meat } from './meat'
import { Rice } from './rice'

export class MealBoxBuilder implements MealBoxBuilderContract {
  private _meal: MealBox = new MealBox()

  reset(): this {
    this._meal = new MealBox()
    return this
  }

  makeMeal(): this {
    const rice = new Rice('arroz', 5)
    const beans = new Beans('feijao', 10)

    this._meal.add(rice, beans)

    return this
  }
  makeMeat(): this {
    const meat = new Meat('carne', 20)
    this._meal.add(meat)

    return this
  }

  makeDessert(): this {
    const dessert = new Dessert('sobremesa', 12)
    this._meal.add(dessert)

    return this
  }

  public get meal(): MealBox {
    return this._meal
  }
}
